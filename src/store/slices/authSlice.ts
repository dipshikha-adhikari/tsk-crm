// src/store/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

// --------------------------------------------------
// Types
// --------------------------------------------------
export interface UserState {
  uid: string;
  email: string | null;
}

interface AuthState {
  user: UserState | null;
  loading: boolean;
  error: string | null;
  isAuthReady: boolean;   // <--- add this
}


const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthReady: false,
};


// --------------------------------------------------
// Thunks
// --------------------------------------------------

// Register
export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { uid: user.uid, email: user.email };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Login
export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return { uid: user.uid, email: user.email };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Logout
export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Listen to current user
export const listenToAuthChanges = createAsyncThunk(
  "auth/listen",
  async (_, thunkAPI) =>
    new Promise<UserState | null>((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve({ uid: user.uid, email: user.email });
        } else {
          resolve(null);
        }
      });
    })
);


// --------------------------------------------------
// Slice
// --------------------------------------------------
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Login
    builder.addCase(loginUserThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Logout
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
      state.user = null;
      state.loading = false;
    });

    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Listen (no loading state)
    builder.addCase(listenToAuthChanges.fulfilled, (state, action) => {
    state.user = action.payload;
    state.isAuthReady = true;    // <-- important
  });
  builder.addCase(listenToAuthChanges.rejected, (state) => {
    state.isAuthReady = true;
  });
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;

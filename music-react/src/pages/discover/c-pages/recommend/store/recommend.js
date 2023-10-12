import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getbanner } from '../services/recommend';

// 网络请求 createAsyncThunk(类型, 回调)
export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const result = await getbanner()
  // 方法二 网络请求返回结果的处理
  console.log(result);
  dispatch(changeBannersAction(result.banners))
  return result.banners
})

const recommendSlice = createSlice({
  name: "recommend",
  initialState: {
    banners: []
  },
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  },
  // 方法一 网络请求返回结果的处理
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.pending, () => {
  //     console.log("pending");
  //   })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log("rejected");
  //     })
  // }
})


export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
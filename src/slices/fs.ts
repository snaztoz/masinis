import { createSlice } from "@reduxjs/toolkit";
import FileEntry from "../contracts/fs";

export interface FsState {
  fileTree?: FileEntry[]
}

const initialState: FsState = {
  fileTree: [
    {
      name: "my_project",
      children: [
        {
          name: "controllers",
          children: [
            {
              name: "user_controller.rb",
            },
            {
              name: "post_controller.rb",
            }
          ],
        },
        {
          name: "models",
          children: [
            {
              name: "user.rb",
            },
            {
              name: "post.rb",
            },
          ],
        },
        {
          name: "config.ru",
        },
        {
          name: "Gemfile",
        },
        {
          name: "Gemfile.lock",
        },
        {
          name: "temp.txt",
        },
      ],
    },
  ],
};

export const fsSlice = createSlice({
  name: "fs",
  initialState,

  reducers: {},
})

export default fsSlice.reducer;

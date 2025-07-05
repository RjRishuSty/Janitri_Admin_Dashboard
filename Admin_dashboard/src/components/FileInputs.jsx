import { Box, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";

const FileInputs = ({ item, imagePreview, handleChange }) => {
  const fileRef = useRef();

  return (
    <Stack
      spacing={2}
      onClick={() => fileRef.current.click()}
      sx={{
        border: "2px dashed #ccc",
        p: 2,
        borderRadius: 2,
        cursor: "pointer",
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "text.primary", textAlign: "center" }}
      >
        Upload Device Image
      </Typography>

      <input
        ref={fileRef}
        id={item.id}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />

      {imagePreview && (
        <Box
          component="img"
          src={imagePreview}
          alt="Device Preview"
          sx={{
            width: "100%",
            maxHeight: 300,
            objectFit: "contain",
            borderRadius: 1,
          }}
        />
      )}
    </Stack>
  );
};

export default FileInputs;

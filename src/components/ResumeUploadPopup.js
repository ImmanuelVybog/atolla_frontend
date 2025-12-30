import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  LinearProgress,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';

const ResumeUploadPopup = ({ open, onClose, onUploadSuccess, jobTitle }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setResumeFile(acceptedFiles[0]);
      setUploadComplete(false);
      setUploadProgress(0);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    multiple: false,
  });

  const handleUpload = () => {
    if (resumeFile) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          onUploadSuccess(resumeFile.name);
          // Optionally close popup after a short delay or keep open for confirmation
          // setTimeout(onClose, 2000);
        }
      }, 200);
    }
  };

  const handleClose = () => {
    setResumeFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadComplete(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Apply for {jobTitle}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {!uploadComplete ? (
          <Box
            {...getRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              cursor: 'pointer',
              bgcolor: isDragActive ? '#f0f0f0' : 'transparent',
              '&:hover': { bgcolor: '#f5f5f5' },
            }}
          >
            <input {...getInputProps()} />
            <CloudUploadIcon sx={{ fontSize: 60, color: '#FF6B00', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Drag & drop your resume here, or click to select
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Supported formats: PDF, DOC, DOCX
            </Typography>
            {resumeFile && (
              <Box sx={{ mt: 2 }}>
                <DescriptionIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                <Typography variant="body2" component="span">
                  {resumeFile.name}
                </Typography>
              </Box>
            )}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', p: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Application Submitted!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Your resume for {jobTitle} has been successfully uploaded.
            </Typography>
          </Box>
        )}

        {isUploading && (
          <Box sx={{ width: '100%', mt: 2 }}>
            <LinearProgress variant="determinate" value={uploadProgress} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Uploading... {uploadProgress}%
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isUploading}>
          {uploadComplete ? 'Close' : 'Cancel'}
        </Button>
        {!uploadComplete && (
          <Button
            onClick={handleUpload}
            variant="contained"
            disabled={!resumeFile || isUploading}
            sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
          >
            {isUploading ? 'Uploading...' : 'Apply'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ResumeUploadPopup;

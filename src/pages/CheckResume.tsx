import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import { useState } from 'react';
import { StyledTextField } from '../components/styled/FormComponents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress from '@mui/material/LinearProgress';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Images from '../assets';

interface ResumeAnalysis {
  score: number;
  improvements: string[];
  matchedSkills: string[];
  missingSkills: string[];
}

const CheckResume = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [jobLink, setJobLink] = useState('');
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleCompare = async () => {
    try {
      // Create FormData for file upload
      const formData = new FormData();
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }
      formData.append('jobDescription', jobDescription);
      if (jobLink) {
        formData.append('jobLink', jobLink);
      }

      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/analyze-resume', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();

      // For now, using mock data
      const mockAnalysis = {
        score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
        improvements: [
          "Add more specific technical skills related to the job requirements",
          "Include quantifiable achievements from your previous roles",
          "Highlight leadership experience and team collaboration",
          "Add relevant certifications or training"
        ],
        matchedSkills: [
          "React",
          "TypeScript",
          "Node.js",
          "REST APIs",
          "Git"
        ],
        missingSkills: [
          "AWS",
          "Python",
          "Docker",
          "CI/CD",
          "Agile methodologies"
        ]
      };

      setAnalysis(mockAnalysis);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      // Handle error appropriately
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
  };

  return (
    <Box sx={{ p: 3, minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box 
          component="img" 
          src={Images.titleIcons.checkResume} 
          alt="Check Resume Icon"
          sx={{ 
            width: 28, 
            height: 28,
            display: 'flex',
            alignItems: 'center'
          }}
        />
        <Typography variant="h5" component="h1">Check Resume</Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Compare your resume against a job description
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
        {/* Resume Upload Section */}
        <Paper sx={{ flex: 1, p: 3, borderRadius: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Upload Resume</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Upload your Resume to check
          </Typography>

          {!resumeFile ? (
            <Box
              sx={{
                border: '2px dashed #E5E7EB',
                borderRadius: '16px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#FF6B00',
                  bgcolor: 'rgba(255, 107, 0, 0.04)'
                }
              }}
              component="label"
            >
              <input
                type="file"
                hidden
                accept=".doc,.docx,.pdf"
                onChange={handleResumeUpload}
              />
              <CloudUploadOutlinedIcon 
                sx={{ 
                  fontSize: 64, 
                  color: '#6B7280',
                  mb: 3
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#111827',
                  mb: 1,
                  fontWeight: 500
                }}
              >
                Drag and drop your resume here
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#6B7280',
                  mb: 4
                }}
              >
                or click to browse files
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                  bgcolor: '#F3F4F6',
                  borderRadius: '8px',
                  py: 1,
                  px: 2
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6B7280'
                  }}
                >
                  Supported formats:
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#111827',
                    fontWeight: 500
                  }}
                >
                  DOC, DOCX, PDF
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#6B7280'
                  }}
                >
                  (Max: 5MB)
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box sx={{ 
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              p: 3,
              bgcolor: 'rgba(255, 107, 0, 0.04)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <InsertDriveFileIcon sx={{ color: '#FF6B00', fontSize: 40 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.5, color: '#111827' }}>
                    {resumeFile.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6B7280' }}>
                    {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                  </Typography>
                </Box>
                <IconButton 
                  onClick={handleRemoveFile}
                  sx={{ 
                    color: '#6B7280',
                    '&:hover': { 
                      color: '#FF6B00',
                      bgcolor: 'rgba(255, 107, 0, 0.1)'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={100} 
                sx={{ 
                  mt: 2,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 107, 0, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: '#FF6B00'
                  }
                }}
              />
            </Box>
          )}
        </Paper>

        {/* Job Description Section */}
        <Paper sx={{ flex: 1, p: 3, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Job Description</Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: '#1E1E1E',
                '&:hover': { bgcolor: '#000' },
                borderRadius: '100px',
                textTransform: 'none'
              }}
            >
              Upload JD
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Upload a job description or paste a link
          </Typography>

          <StyledTextField
            multiline
            rows={8}
            fullWidth
            placeholder="Paste or Enter a Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Typography variant="subtitle2" sx={{ mb: 1 }}>Job link</Typography>
          <StyledTextField
            fullWidth
            placeholder="www.linkedin.com/full-stack-developer/microsoft"
            value={jobLink}
            onChange={(e) => setJobLink(e.target.value)}
          />
        </Paper>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleCompare}
          disabled={!resumeFile || (!jobDescription && !jobLink)}
          sx={{
            bgcolor: '#FF6B00',
            '&:hover': { bgcolor: '#e66000' },
            borderRadius: '100px',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
            boxShadow: '0 4px 14px rgba(255, 107, 0, 0.25)'
          }}
        >
          Compare Resume
        </Button>
      </Box>

      {analysis && (
        <Box sx={{ mt: 4 }}>
          <Paper sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>Analysis Results</Typography>
            
            <Box sx={{ 
              display: 'flex',
              gap: 4,
              mb: 4,
              p: 3,
              bgcolor: 'rgba(255, 107, 0, 0.04)',
              borderRadius: 3
            }}>
              <Box sx={{ 
                position: 'relative',
                width: 120,
                height: 120
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 600,
                    color: analysis.score >= 75 ? '#10B981' : analysis.score >= 50 ? '#FF6B00' : '#EF4444'
                  }}>
                    {analysis.score}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#666' }}>
                    out of 100
                  </Typography>
                </Box>
                <Box sx={{
                  position: 'absolute',
                  top: -3,
                  left: -3,
                  right: -3,
                  bottom: -3,
                  borderRadius: '50%',
                  border: '3px solid',
                  borderColor: analysis.score >= 75 ? '#10B981' : analysis.score >= 50 ? '#FF6B00' : '#EF4444',
                  opacity: 0.2
                }} />
                <Box sx={{
                  position: 'absolute',
                  top: -3,
                  left: -3,
                  right: -3,
                  bottom: -3,
                  borderRadius: '50%',
                  border: '3px solid',
                  borderColor: analysis.score >= 75 ? '#10B981' : analysis.score >= 50 ? '#FF6B00' : '#EF4444',
                  transform: 'rotate(-90deg)',
                  transformOrigin: '50% 50%',
                  transition: 'clip-path 1s ease-in-out',
                  clipPath: `polygon(50% 50%, 50% 0, ${50 + analysis.score * 1.8}% 0, ${50 + analysis.score * 1.8}% ${50 + analysis.score * 1.8}%, 50% 50%)`
                }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>Resume Match Score</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Your resume matches {analysis.score}% of the job requirements
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: analysis.score >= 75 ? '#10B981' : analysis.score >= 50 ? '#FF6B00' : '#EF4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  {analysis.score >= 75 ? (
                    <CheckCircleIcon fontSize="small" />
                  ) : analysis.score >= 50 ? (
                    <ErrorIcon fontSize="small" />
                  ) : (
                    <ErrorIcon fontSize="small" />
                  )}
                  {analysis.score >= 75 ? 'Great match!' : analysis.score >= 50 ? 'Good match with room for improvement' : 'Needs improvement'}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600 }}>
                  Suggested Improvements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {analysis.improvements.map((improvement, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        gap: 2,
                        p: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.02)',
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.04)'
                        }
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#666',
                          minWidth: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: 'rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 500
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <Typography variant="body2">
                        {improvement}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#10B981' }}>
                    Matched Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {analysis.matchedSkills.map((skill, index) => (
                      <Box
                        key={index}
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: 'rgba(16, 185, 129, 0.1)',
                          color: '#10B981',
                          borderRadius: '100px',
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 16 }} />
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#EF4444' }}>
                    Missing Skills
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {analysis.missingSkills.map((skill, index) => (
                      <Box
                        key={index}
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: 'rgba(239, 68, 68, 0.1)',
                          color: '#EF4444',
                          borderRadius: '100px',
                          fontSize: '0.875rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <ErrorIcon sx={{ fontSize: 16 }} />
                        {skill}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default CheckResume; 
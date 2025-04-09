import { Box, Typography, Paper, Button } from '@mui/material';
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledTextField } from '../components/styled/FormComponents';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import Images from '../assets';

interface JobApplication {
  id: number;
  company: string;
  logo: string;
  position: string;
  experience: string;
  salary: string;
  appliedDate: string;
}

type ApplicationStatus = 'saved' | 'applied' | 'inreview' | 'interviewscheduled' | 'interviewcompleted' | 'offerreceived' | 'rejected' | 'withdrawn';

interface ApplicationsByStatus extends Record<ApplicationStatus, JobApplication[]> {}

const JobTracker = () => {
  const [applications, setApplications] = useState<ApplicationsByStatus>({
    saved: [
      {
        id: 1,
        company: "Google",
        logo: "G",
        position: "Full-stack Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      },
      {
        id: 2,
        company: "Microsoft",
        logo: "M",
        position: "Senior UI/UX Designer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      },
      {
        id: 3,
        company: "Meta",
        logo: "M",
        position: "Data Analyst",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      },
      {
        id: 4,
        company: "Amazon",
        logo: "A",
        position: "Cybersecurity Engineer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    applied: [
      {
        id: 5,
        company: "Netflix",
        logo: "N",
        position: "React Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      },
      {
        id: 6,
        company: "Google",
        logo: "G",
        position: "Full-stack Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    inreview: [
      {
        id: 7,
        company: "TCS",
        logo: "T",
        position: "Full-stack Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    interviewscheduled: [
      {
        id: 8,
        company: "Netflix",
        logo: "N",
        position: "React Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    interviewcompleted: [
      {
        id: 9,
        company: "Google",
        logo: "G",
        position: "Full-stack Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    offerreceived: [
      {
        id: 10,
        company: "Amazon",
        logo: "A",
        position: "Cybersecurity Engineer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    
    rejected: [
      {
        id: 8,
        company: "Netflix",
        logo: "N",
        position: "React Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      },
      {
        id: 9,
        company: "Google",
        logo: "G",
        position: "Full-stack Developer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ],
    withdrawn: [
      {
        id: 10,
        company: "Amazon",
        logo: "A",
        position: "Cybersecurity Engineer",
        experience: "6 years exp.",
        salary: "$120k - $135k",
        appliedDate: "Jan 4, 2025"
      }
    ]
  });

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceId = source.droppableId as ApplicationStatus;
    const destinationId = destination.droppableId as ApplicationStatus;

    if (sourceId === destinationId && source.index === destination.index) {
      return;
    }

    const start = applications[sourceId];
    const finish = applications[destinationId];

    if (sourceId === destinationId) {
      // Moving within the same list
      const newItems = Array.from(start);
      const [reorderedItem] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, reorderedItem);

      setApplications({
        ...applications,
        [sourceId]: newItems
      });
    } else {
      // Moving to a different list
      const startItems = Array.from(start);
      const finishItems = Array.from(finish);
      const [movedItem] = startItems.splice(source.index, 1);
      finishItems.splice(destination.index, 0, movedItem);

      setApplications({
        ...applications,
        [sourceId]: startItems,
        [destinationId]: finishItems
      });
    }
  };

  const statusConfig: Record<ApplicationStatus, { color: string; bgColor: string; title: string }> = {
    saved: { color: '#FF6B00', bgColor: '#FFE2DB', title: 'Saved' },
    applied: { color: '#FF6B00', bgColor: '#FFE2DB', title: 'Applied' },
    inreview: { color: '#7C3AED', bgColor: '#EDE9FE', title: 'Interview In Process' },
    interviewscheduled: { color: '#10B981', bgColor: '#D1FAE5', title: 'Interview Scheduled' },
    interviewcompleted: { color: '#10B981', bgColor: '#D1FAE5', title: 'Interview Completed' },
    offerreceived: { color: '#10B981', bgColor: '#D1FAE5', title: 'Offer Received' },
    rejected: { color: '#EF4444', bgColor: '#FEE2E2', title: 'Rejected' },
    withdrawn: { color: '#EF4444', bgColor: '#FEE2E2', title: 'Withdrawn' }
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#fff', minHeight: '100vh', m: 'auto', maxWidth: '96rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 1, width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box 
          component="img" 
          src={Images.titleIcons.jobTracker} 
          alt="Job Tracker Icon"
          sx={{ 
            width: 28, 
            height: 28,
            display: 'flex',
            alignItems: 'center'
          }}
        />
        <Typography variant="h5" component="h1">Tracker</Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Job alerts based on your preferences. You can also set a custom job alert!
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 4, width: '100%' }}>
        <Box sx={{ flex: 1, position: 'relative' }}>
          <SearchIcon sx={{ position: 'absolute', left: 12, top: 12, color: '#666' }} />
          <StyledTextField
            fullWidth
            placeholder="Search for Jobs"
            sx={{ 
              '& .MuiOutlinedInput-root': {
                pl: 5,
                borderRadius: '100px',
                bgcolor: '#fff'
              }
            }}
          />
        </Box>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            borderColor: '#ddd',
            color: '#666',
            borderRadius: '100px',
            px: 3
          }}
        >
          Filters
        </Button>
      </Box>
      </Box>

      <DragDropContext onDragEnd={onDragEnd}>
        <Box 
          sx={{ 
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            pb: 2,
            justifyContent: 'flex-start',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#666',
              },
            },
          }}
        >
          {(Object.entries(statusConfig) as [ApplicationStatus, typeof statusConfig[ApplicationStatus]][]).map(([status, config]) => (
            <Box 
              key={status}
              sx={{ 
                flex: '0 0 300px',
                p: 1.5,
                bgcolor: '#f5f5f5',
                borderRadius: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, pl: 2.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: config.color }} />
                <Typography variant="subtitle1">{config.title}</Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    bgcolor: config.bgColor,
                    color: config.color,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '100px',
                    ml: 1
                  }}
                >
                  {applications[status].length}
                </Typography>
              </Box>
              <Droppable droppableId={status}>
                {(provided, snapshot) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      minHeight: 200,
                      backgroundColor: snapshot.isDraggingOver ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                      borderRadius: 3,
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    {applications[status].map((application, index) => (
                      <Draggable
                        key={application.id}
                        draggableId={application.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <Paper
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            elevation={snapshot.isDragging ? 4 : 0}
                            sx={{
                              mb: 2,
                              borderRadius: 3,
                              border: '1px solid #eee',
                              backgroundColor: '#fff',
                              '&:hover': {
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
                              },
                              ...(snapshot.isDragging && {
                                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)'
                              })
                            }}
                          >
                            <Box sx={{ p: 2.5 }}>
                              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                <Box
                                  component="img"
                                  src={(() => {
                                    const company = application.company.toLowerCase();
                                    // Use the appropriate logo from our registry based on company name
                                    switch(company) {
                                      case 'google': return Images.logos.google;
                                      case 'microsoft': return Images.logos.microsoft;
                                      case 'amazon': return Images.logos.amazon;
                                      case 'apple': return Images.logos.apple;
                                      case 'meta': return Images.logos.meta;
                                      case 'netflix': return Images.logos.netflix;
                                      case 'tcs': return Images.logos.tcs;
                                      default: return ''; // Fallback
                                    }
                                  })()}
                                  alt={application.company}
                                  sx={{
                                    width: 32,
                                    height: 32,
                                    objectFit: 'contain',
                                    borderRadius: 1
                                  }}
                                />
                                <Box>
                                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                                    {application.position}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {application.company}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Box component="img" src={Images.icons.experience} alt="Experience" sx={{ width: 16, height: 16 }} />
                                  <Typography variant="body2" color="text.secondary">
                                    {application.experience}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Box component="img" src={Images.icons.salary} alt="Salary" sx={{ width: 16, height: 16 }} />
                                  <Typography variant="body2" color="text.secondary">
                                    {application.salary}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>
                                <Typography variant="body2" color="text.secondary">
                                  Applied on {application.appliedDate}
                                </Typography>
                                <Button
                                  endIcon={<ArrowForwardIcon />}
                                  sx={{
                                    color: '#FF6B00',
                                    '&:hover': {
                                      backgroundColor: 'transparent',
                                      textDecoration: 'underline'
                                    },
                                    textTransform: 'none'
                                  }}
                                >
                                  View Job
                                </Button>
                              </Box>
                            </Box>
                          </Paper>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          ))}
        </Box>
      </DragDropContext>
    </Box>
  );
};

export default JobTracker; 
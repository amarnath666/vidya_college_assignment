import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    courses: [
        { 
            id: 1, 
            name: "PG Courses", 
            buttonText: "After Graduation", 
            smallCards: [
                { upperButtonText: "2 Years", description: "Online MBA", compareText: "Compare 10 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
        { 
            id: 2, 
            name: "UG Courses", 
            buttonText: "After 12th",
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },

            ]
        },
        { 
            id: 3, 
            name: "Executive Education", 
            buttonText: "CXOs",
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
        { 
            id: 4, 
            name: "Doctorate/Ph.D.", 
            buttonText: "Get Dr. Title",
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "1 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "2 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
        { 
            id: 5, 
            name: "Job Guarantee", 
            buttonText: "100% Placement",
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "1 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "2 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
        { 
            id: 6, 
            name: "Skilling & Certificate", 
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "1 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "2 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
        { 
            id: 7, 
            name: "Advanced Diploma", 
            smallCards: [
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "1 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "3 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
                { upperButtonText: "2 Years", description: "BSc Computer Science", compareText: "Compare 15 Now" },
            ]
        },
    ],
    activeCourseId: 1, // Default to first course
};

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setActiveCourse: (state, action) => {
            state.activeCourseId = action.payload;
        },
    },
});

export const { setActiveCourse } = courseSlice.actions;
export default courseSlice.reducer;

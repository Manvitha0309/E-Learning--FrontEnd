// Centralized configuration for the E-Learning platform
const CONFIG = {
    // Backend URL - Change this to switch between local and production
    BACKEND_URL: "http://localhost:10000",
    
    // Alternative: Use production URL
    // BACKEND_URL: "https://e-learning-backend-hywc.onrender.com",
    
    // API Endpoints
    API: {
        SIGNUP: "/api/signup",
        SIGNIN: "/api/signin",
        GET_SECURITY_CODE: "/api/get-security-code",
        VERIFY_SECURITY_CODE: "/api/verify-security-code",
        ASSIGNMENTS: "/api/assignments",
        SUBMIT_SCORE: "/api/assignments/submit-score",
        GET_SCORES: "/api/assignments/scores",
        CHECK_COMPLETION: "/api/assignments/check-completion"
    },
    
    // Application Settings
    APP: {
        NAME: "EduVerse",
        VERSION: "1.0.0",
        DEFAULT_COURSE: "cns",
        DEFAULT_MODULE: "module1"
    },
    
    // Local Storage Keys
    STORAGE: {
        IS_LOGGED_IN: "isLoggedIn",
        ENROLLED_EMAIL: "enrolledEmail"
    },
    
    // UI Messages
    MESSAGES: {
        LOGIN_SUCCESS: "Login successful!",
        SIGNUP_SUCCESS: "User signed up successfully!",
        SCORE_SUBMITTED: "Score submitted successfully",
        ASSIGNMENT_LOADED: "Assignment loaded successfully",
        ERROR_NETWORK: "Network error. Please check your connection.",
        ERROR_SERVER: "Server error. Please try again later.",
        ERROR_INVALID_CREDENTIALS: "Invalid email or password.",
        ERROR_USER_EXISTS: "User with that email already exists.",
        ERROR_PASSWORD_REQUIREMENTS: "Password must be at least 6 characters and contain a special symbol."
    }
};

// Helper function to get full API URL
function getApiUrl(endpoint) {
    return CONFIG.BACKEND_URL + endpoint;
}

// Helper function to show messages (can be overridden by individual pages)
function showMessage(text, isError = false) {
    console.log(isError ? "ERROR:" : "INFO:", text);
    // Individual pages can override this function for their specific UI
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getApiUrl, showMessage };
}

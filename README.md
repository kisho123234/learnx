# LearnXchange - Graduation Project

A modern educational platform MVP built with Next.js and a PHP API backend.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- PHP 8.0+

### Installation

```bash
# Install dependencies
npm install

# Setup environment (already configured)
# .env.local is pre-configured

# Run development server
npm run dev
```

App runs on **http://localhost:3000**

### Backend Setup

The project requires a PHP backend running on `http://localhost:8000`.

```bash
# In a separate terminal/directory
php -S localhost:8000
```

## 📚 Features

- **Student Dashboard**: View enrolled courses, progress tracking
- **Course Marketplace**: Browse and enroll in courses
- **Video Lessons**: Embedded YouTube video player
- **PDF Resources**: In-app PDF viewer
- **Lesson Completion**: Mark lessons complete and track progress
- **Teacher Tools**: Add lessons to course sections
- **Demo Authentication**: Pre-configured student & teacher accounts

## 👥 Demo Accounts

**Student:**
- Email: `student@learnx.com`
- Password: `123456`

**Teacher:**
- Email: `teacher@learnx.com`
- Password: `123456`

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── globals.css         # Global styles
├── courses/
│   ├── page.tsx        # Courses listing
│   └── [id]/page.tsx   # Course details
├── dashboard/page.tsx  # Student dashboard
└── teacher/
    └── create-lesson/  # Teacher lesson creation
lib/
└── api.ts              # API utility functions
```

## 🔑 Key Technologies

- **Frontend**: React 18, Next.js 14, TypeScript
- **Styling**: Custom CSS with modern design
- **Backend**: PHP API (separate repo)
- **Database**: SQLite (backend)

## 📝 License

Graduation Project - 2024

# Bobby's Dev Room - Project Plan

## Overview
A portfolio website showcasing tutorials, projects, and coding solutions with an admin panel for content management.

**Domain:** bobbysdevroom.io (to be purchased)  
**Hosting:** Azure App Service  
**Timeline:** 1-2 weeks  

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              AZURE                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────────────┐      ┌──────────────────────┐                 │
│  │   Azure App Service  │      │  Azure SQL Database  │                 │
│  │                      │      │                      │                 │
│  │  ┌────────────────┐  │      │  - Users             │                 │
│  │  │  ASP.NET Core  │  │◄────►│  - Tutorials         │                 │
│  │  │     API        │  │      │  - Projects          │                 │
│  │  └───────┬────────┘  │      │  - LeetCode          │                 │
│  │          │           │      │  - ArcRaiders        │                 │
│  │  ┌───────▼────────┐  │      │  - Resume/Profile    │                 │
│  │  │  React SPA     │  │      └──────────────────────┘                 │
│  │  │  (Static)      │  │                                               │
│  │  └────────────────┘  │      ┌──────────────────────┐                 │
│  │                      │      │  Azure Blob Storage  │                 │
│  └──────────────────────┘      │  - Resume PDFs       │                 │
│                                │  - Tutorial files    │                 │
│                                │  - Images            │                 │
│                                └──────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18 + TypeScript + Vite |
| Animations | Framer Motion + GSAP |
| Styling | Tailwind CSS |
| Backend | ASP.NET Core 8 Web API |
| Database | SQL Server (Azure SQL) |
| Auth | ASP.NET Core Identity + JWT |
| File Storage | Azure Blob Storage |
| Hosting | Azure App Service |

---

## Phases

### Phase 1: Landing Page + About Me + Docker Tutorial ⏱️ 3-4 days
**Goal:** Get something live and impressive ASAP

- [ ] Project scaffolding (API + React)
- [ ] Database schema design & migrations
- [ ] Landing page with animations (akis.studio style)
  - Hero section with name/title
  - Projects showcase grid
  - About Me section
  - Skills display
  - Social links (GitHub, LinkedIn, Coming Soon for others)
- [ ] About Me page
  - Bio
  - Resume display (parsed from data)
  - PDF download link
- [ ] Docker tutorial integration
- [ ] Basic API endpoints for content
- [ ] Deploy to Azure (staging)

### Phase 2: Admin Panel + Auth ⏱️ 2-3 days
**Goal:** Manage content without touching code

- [ ] User authentication (register/login)
- [ ] Admin dashboard
  - Tutorial management (add/edit/delete)
  - About Me editor
  - Resume PDF upload
  - Project management
- [ ] Role-based authorization (Admin vs Public)
- [ ] Azure Blob Storage integration for file uploads
- [ ] Protected API endpoints

### Phase 3: Arc Raiders Dashboard ⏱️ 2-3 days
**Goal:** Showcase your game analytics project

- [ ] Migrate Arc Raiders database to Azure SQL
- [ ] API endpoints for Arc Raiders data
- [ ] Interactive dashboard page
  - Items browser
  - Quest tracker
  - Event timers
  - Maps
- [ ] Proper project showcase page

### Phase 4: LeetCode Solutions ⏱️ 2 days
**Goal:** Searchable collection of your solutions

- [ ] Database tables for problems/solutions
- [ ] Bulk import of existing 25 solutions
- [ ] Solutions browser page
  - Filter by difficulty (Easy/Medium/Hard)
  - Filter by topic (Arrays, Trees, DP, etc.)
  - Search by name/number
- [ ] Solution detail page
  - Problem description
  - Your solution code (syntax highlighted)
  - Explanation
  - Time/space complexity
- [ ] Admin: Add new solutions

---

## Database Schema

```sql
-- Users & Auth
Users (
    Id, Username, Email, PasswordHash, Role, CreatedAt
)

-- Profile/Resume
Profile (
    Id, FullName, Title, Bio, Email, GitHub, LinkedIn, 
    TwitterUrl, YouTubeUrl, TwitchUrl, ResumeUrl, UpdatedAt
)

Skills (
    Id, Name, Category, Proficiency, SortOrder
)

Experience (
    Id, Company, Title, StartDate, EndDate, Description, SortOrder
)

Education (
    Id, Institution, Degree, Field, GraduationDate, Description
)

-- Content
Tutorials (
    Id, Title, Slug, Description, HtmlFilePath, ThumbnailUrl,
    Category, IsPublished, CreatedAt, UpdatedAt
)

Projects (
    Id, Title, Slug, Description, ThumbnailUrl, LiveUrl, 
    GitHubUrl, Technologies, IsPublished, IsFeatured, SortOrder
)

-- LeetCode
LeetCodeProblems (
    Id, ProblemNumber, Title, Slug, Difficulty, 
    Topics, Description, SolutionCode, Language,
    Explanation, TimeComplexity, SpaceComplexity,
    IsPublished, CreatedAt
)

-- Arc Raiders (existing tables)
ArcRaiders_Items, ArcRaiders_Quests, ArcRaiders_Traders, 
ArcRaiders_EventTimers, ArcRaiders_Maps, ArcRaiders_Arcs
```

---

## Folder Structure

```
bobbys-dev-room/
├── src/
│   ├── BobbysDevRoom.Api/           # ASP.NET Core API
│   │   ├── Controllers/
│   │   ├── Services/
│   │   ├── Data/
│   │   │   ├── Entities/
│   │   │   ├── Migrations/
│   │   │   └── AppDbContext.cs
│   │   ├── DTOs/
│   │   ├── Auth/
│   │   └── Program.cs
│   │
│   └── bobbys-dev-room-client/      # React Frontend
│       ├── src/
│       │   ├── components/
│       │   │   ├── layout/
│       │   │   ├── home/
│       │   │   ├── about/
│       │   │   ├── tutorials/
│       │   │   ├── projects/
│       │   │   ├── leetcode/
│       │   │   └── admin/
│       │   ├── pages/
│       │   ├── hooks/
│       │   ├── services/            # API calls
│       │   ├── styles/
│       │   └── App.tsx
│       ├── public/
│       │   └── tutorials/
│       │       └── docker/
│       │           └── index.html
│       └── package.json
│
├── docs/
│   └── PROJECT_PLAN.md
│
├── .gitignore
├── README.md
└── BobbysDevRoom.sln
```

---

## Design Notes (akis.studio inspiration)

### Landing Page Sections
1. **Hero** - Full viewport, bold typography, subtle particle/gradient animation
2. **Featured Projects** - Horizontal scroll or staggered grid with hover effects
3. **About Preview** - Split layout with image/text, scroll-triggered animations
4. **Skills** - Animated bars or creative visualization
5. **Contact/Social** - Minimal footer with links

### Animation Techniques
- Scroll-triggered reveals (Framer Motion + Intersection Observer)
- Smooth page transitions
- Magnetic buttons (cursor follows)
- Text split animations (letters animate in)
- Parallax scrolling on images
- Custom cursor
- Loading screen with logo animation

### Color Palette (Dark Theme)
- Background: #0a0a0a, #111111
- Primary: #2496ed (Docker blue - ties to your tutorial)
- Accent: #00ff88 (Terminal green)
- Text: #ffffff, #888888
- Gradients for emphasis

---

## Azure Resources Needed

| Resource | SKU | Est. Cost/Month |
|----------|-----|-----------------|
| App Service | B1 Basic | ~$13 |
| Azure SQL | Basic (2GB) | ~$5 |
| Blob Storage | LRS | ~$1 |
| **Total** | | **~$19/month** |

*Can start with free tier and scale up*

---

## Domain Setup

1. Purchase bobbysdevroom.io from:
   - Namecheap (~$12/year)
   - Google Domains (~$12/year)
   - GoDaddy (often has deals)

2. Configure DNS to point to Azure App Service
3. Set up SSL certificate (free via Azure)

---

## Next Steps

1. ✅ You review this plan
2. I scaffold the solution structure
3. You clone/download to your machine
4. We build Phase 1 together
5. Deploy to Azure staging
6. Iterate and add phases

---

**Questions before I start building?**

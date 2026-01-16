# Bobby's Dev Room

A portfolio website showcasing tutorials, projects, and coding solutions.

## Tech Stack

- **Frontend:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
- **Backend:** ASP.NET Core 8 Web API
- **Database:** SQL Server
- **Hosting:** Azure App Service

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- [Docker](https://www.docker.com/) (for local SQL Server)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bobbys-dev-room.git
cd bobbys-dev-room
```

### 2. Start SQL Server (Docker)

```bash
docker run -d \
  --name bobbys-dev-room-db \
  -e "ACCEPT_EULA=Y" \
  -e "MSSQL_SA_PASSWORD=YourPassword123!" \
  -p 1433:1433 \
  mcr.microsoft.com/mssql/server:2022-latest
```

### 3. Set up the API

```bash
cd src/BobbysDevRoom.Api

# Restore packages
dotnet restore

# Run database migrations (after creating them)
dotnet ef database update

# Run the API
dotnet run
```

The API will be available at `http://localhost:5000`
Swagger UI: `http://localhost:5000/swagger`

### 4. Set up the React frontend

```bash
cd src/bobbys-dev-room-client

# Install dependencies
npm install

# Run the dev server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Project Structure

```
bobbys-dev-room/
├── src/
│   ├── BobbysDevRoom.Api/        # ASP.NET Core API
│   │   ├── Controllers/          # API endpoints
│   │   ├── Data/                 # Database context & entities
│   │   ├── Services/             # Business logic
│   │   └── Program.cs            # App entry point
│   │
│   └── bobbys-dev-room-client/   # React frontend
│       ├── src/
│       │   ├── components/       # Reusable UI components
│       │   ├── pages/            # Page components
│       │   ├── services/         # API client
│       │   └── styles/           # CSS/Tailwind
│       └── public/               # Static assets
│
├── docs/                         # Documentation
└── BobbysDevRoom.sln            # Solution file
```

## Development Workflow

### Creating Database Migrations

```bash
cd src/BobbysDevRoom.Api
dotnet ef migrations add MigrationName
dotnet ef database update
```

### Building for Production

```bash
# API
cd src/BobbysDevRoom.Api
dotnet publish -c Release -o ./publish

# Frontend
cd src/bobbys-dev-room-client
npm run build
```

## Current Progress

- [x] **Chunk 1A:** Project scaffolding
- [ ] **Chunk 1B:** Database setup
- [ ] **Chunk 1C:** Hero section
- [ ] **Chunk 1D:** Projects grid
- [ ] **Chunk 1E:** About + Skills
- [ ] **Chunk 1F:** Footer
- [ ] **Chunk 1G:** API endpoints
- [ ] **Chunk 1H:** Connect React to API
- [ ] **Chunk 1I:** About Me page
- [ ] **Chunk 1J:** Docker tutorial integration
- [ ] **Chunk 1K:** Azure deployment

## License

MIT

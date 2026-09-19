# TypeScript Build Error Analysis - Current Build (167 Errors)

**Analysis Date:** September 19, 2026  
**Total Errors:** 167  
**Build Command:** `npm run build`

---

## ERROR SUMMARY BY TYPE

| Error Code | Error Type | Count | Category | Priority |
|-----------|-----------|-------|----------|----------|
| TS18046 | 'error' is of type 'unknown' | 61 | Type Checking | HIGH |
| TS2305 | Module has no exported member | 42 | Missing Exports | HIGH |
| TS2339 | Property does not exist on type | 22 | Missing Methods | HIGH |
| TS2307 | Cannot find module | 13 | Missing Dependencies | CRITICAL |
| TS2614 | No exported member (default import suggestion) | 9 | Export Mismatches | HIGH |
| TS2724 | No exported member (named export suggestion) | 3 | Export Mismatches | HIGH |
| TS2459 | Declares locally, not exported | 4 | Export Issues | HIGH |
| TS2551 | Property does not exist (method names) | 1 | Method Name Errors | HIGH |
| TS2322 | Type mismatch | 1 | Type Errors | MEDIUM |
| TS2769 | No overload matches | 1 | Function Call Errors | MEDIUM |
| TS2554 | Wrong number of arguments | 1 | Function Arguments | MEDIUM |
| TS7006 | Parameter implicitly has 'any' type | 5 | Type Annotations | MEDIUM |

---

## CATEGORY 1: TS18046 - 'error' is of type 'unknown' (61 instances)

**Root Cause:** Catch block error variables are not explicitly typed, so accessing `.message` is unsafe.

**Fix Pattern:**
```typescript
// Option 1: Type guard (recommended)
catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown error';
}

// Option 2: Casting
catch (error) {
  const message = (error as Error).message;
}

// Option 3: Type annotation
catch (error: unknown) {
  const message = typeof error === 'object' && error !== null && 'message' in error 
    ? String((error as any).message) 
    : 'Unknown error';
}
```

### Affected Files and Lines:

**controllers/admin.controller.ts:**
- Line 17, 22: `error.message`
- Line 33, 22: `error.message`
- Line 57, 22: `error.message`
- Line 76, 22: `error.message`
- Line 93, 22: `error.message`

**controllers/auth.controller.ts:**
- Line 25: `err.message` (in jwt.verify callback)
- Line 41: `err.message` (in jwt.verify callback)

**controllers/contact.controller.ts:**
- Line 24, 26: `error.message`
- Line 40, 26: `error.message`

**controllers/dashboard.controller.ts:**
- Line 17, 26: `error.message`

**controllers/donations.controller.ts:**
- Line 25, 26: `error.message`
- Line 41, 26: `error.message`
- Line 64, 26: `error.message`
- Line 89, 26: `error.message`
- Line 112, 26: `error.message`

**controllers/events.controller.ts:**
- Line 17, 99: `error.message`
- Line 31, 98: `error.message`
- Line 41, 96: `error.message`
- Line 56, 96: `error.message`
- Line 70, 96: `error.message`

**controllers/gallery.controller.ts:**
- Line 22, 26: `error.message`
- Line 38, 26: `error.message`
- Line 52, 26: `error.message`

**controllers/leaders.controller.ts:**
- Line 17, 97: `error.message`
- Line 31, 96: `error.message`
- Line 41, 97: `error.message`
- Line 56, 97: `error.message`
- Line 70, 97: `error.message`

**controllers/liveStream.controller.ts:**
- Line 16, 26: `error.message`
- Line 33, 26: `error.message`
- Line 50, 26: `error.message`
- Line 66, 26: `error.message`

**controllers/ministries.controller.ts:**
- Line 17, 110: `error.message`
- Line 30, 108: `error.message`
- Line 40, 106: `error.message`
- Line 54, 106: `error.message`
- Line 67, 106: `error.message`

**controllers/prayerRequests.controller.ts:**
- Line 18, 26: `error.message`
- Line 34, 26: `error.message`
- Line 57, 26: `error.message`
- Line 74, 26: `error.message`

**controllers/sermons.controller.ts:**
- Line 17, 107: `error.message`
- Line 30, 106: `error.message`
- Line 40, 104: `error.message`
- Line 54, 104: `error.message`
- Line 67, 104: `error.message`

**controllers/services.controller.ts:**
- Line 13, 97: `error.message`
- Line 27, 96: `error.message`
- Line 38, 94: `error.message`
- Line 53, 94: `error.message`
- Line 67, 94: `error.message`

**controllers/settings.controller.ts:**
- Line 22, 26: `error.message`
- Line 39, 26: `error.message`

**services/contact.service.ts:**
- Line 19, 22: `error.message`
- Line 35, 22: `error.message`

---

## CATEGORY 2: TS2307 - Cannot find module (13 instances)

**Root Cause:** Missing npm packages or incorrect import paths.

### A. Missing npm packages:

**@prisma/client** - Status: NOT INSTALLED
Files affected:
- src/prisma/index.ts:1
- src/prisma/seed.ts:1

**supertest** - Status: NOT INSTALLED
Files affected:
- src/tests/auth.test.ts:1
- src/tests/authorization.test.ts:1
- src/tests/donations.test.ts:1
- src/tests/events.test.ts:1
- src/tests/ministries.test.ts:1
- src/tests/sermons.test.ts:1
- src/tests/services.test.ts:1

**Fix:** Install dependencies
```bash
npm install @prisma/client @prisma/cli
npm install --save-dev supertest @types/supertest
```

### B. Wrong import paths:

**src/repositories/contact.repository.ts:1:**
- Error: Cannot find module `'../prisma/schema.prisma'`
- Fix: Change to `import { prisma } from '../prisma';` (schema.prisma is not importable)

**src/repositories/liveStream.repository.ts:1:**
- Error: Cannot find module `'../prisma/schema.prisma'`
- Fix: Same as above

**src/tests/authorization.test.ts:3:**
- Error: Cannot find module `'./utils'`
- Fix: Create [src/tests/utils.ts](src/tests/utils.ts) with test utilities

**src/tests/services.test.ts:3:**
- Error: Cannot find module `'./testUtils'`
- Fix: Create [src/tests/testUtils.ts](src/tests/testUtils.ts)

---

## CATEGORY 3: TS2305 - Module has no exported member (42 instances)

**Root Cause:** Types/validators/services either export different member name or use default export instead of named export.

### Missing Type Exports (types/api.ts and types/prisma.ts):

**types/api.ts needs these exports:**
- `Donation` - used in controllers/donations.controller.ts:3, repositories/donation.repository.ts:2, services/donation.service.ts:2
- `Leader` - used in controllers/leaders.controller.ts:3
- `Service` - used in controllers/services.controller.ts:3, repositories/service.repository.ts:2, services/service.service.ts:2
- `ContactMessage` - used in repositories/contact.repository.ts:2, services/contact.service.ts:1
- `LiveStream` - used in repositories/liveStream.repository.ts:2
- `User` - used in services/admin.service.ts:1
- `DonationData` - used in services/donation.service.ts:2
- `LiveStreamData` - used in services/liveStream.service.ts:2
- `PrayerRequest` - used in services/prayerRequest.service.ts:2
- `Settings` - used in services/settings.service.ts:2

**types/prisma.ts needs these exports:**
- `Settings` - used in repositories/settings.repository.ts:2

**Fix:** Create/update [src/types/api.ts](src/types/api.ts) to export all required types
```typescript
export interface Donation { /* ... */ }
export interface Leader { /* ... */ }
export interface Service { /* ... */ }
export interface ContactMessage { /* ... */ }
export interface LiveStream { /* ... */ }
export interface User { /* ... */ }
export interface DonationData { /* ... */ }
export interface LiveStreamData { /* ... */ }
export interface PrayerRequest { /* ... */ }
export interface Settings { /* ... */ }
```

### Missing Validator Exports:

**validators/auth.validator.ts:**
- Missing: `validateLogin`, `validateRegister`
- Used in: controllers/auth.controller.ts:4

**validators/sermon.validator.ts:**
- Missing: `CreateSermonInput`, `UpdateSermonInput`
- Used in: services/sermon.service.ts:3

**validators/service.validator.ts:**
- Missing: `validateService`
- Used in: routes/services.routes.ts:9

**Fix:** Ensure these validators export named functions/types

### Missing PrismaClient re-exports (via @prisma/client):

- repositories/dashboard.repository.ts:1
- repositories/donation.repository.ts:1
- repositories/event.repository.ts:1
- repositories/gallery.repository.ts:1
- repositories/leader.repository.ts:1
- repositories/ministry.repository.ts:1
- repositories/prayerRequest.repository.ts:1
- repositories/sermon.repository.ts:1
- repositories/service.repository.ts:1
- repositories/settings.repository.ts:1
- services/leader.service.ts:1
- services/ministry.service.ts:1
- services/prayerRequest.service.ts:1
- services/sermon.service.ts:1
- services/service.service.ts:3
- services/settings.service.ts:1
- types/prisma.ts:3

**Fix:** Install @prisma/client package (see Category 1)

### Middleware Exports:

**middleware/auth.ts:**
- Missing: `authorize` export
- Used in: routes/liveStream.routes.ts:3, routes/services.routes.ts:10

**Fix:** Ensure auth.ts exports authorize function properly or update routes to use correct export

---

## CATEGORY 4: TS2339 - Property does not exist on type (22 instances)

**Root Cause:** Missing methods on services/repositories or missing augmentation for Express Request type.

### A. Missing type extension for Express Request (6 instances):

**Issue:** Property 'user' does not exist on Express Request type

**Fix:** Create a type augmentation file. Add to [src/types/index.ts](src/types/index.ts):
```typescript
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: User; // or User type from types/api.ts
    }
  }
}
```

**Affected:**
- middleware/auth.ts:17
- middleware/authorize.ts:24
- controllers/auth.controller.ts:51
- utils/jwt.ts:26

Applied in these test files:
- src/tests/auth.test.ts:2 (imports app)

### B. Missing methods on GalleryService (1 instance):

**controllers/gallery.controller.ts:29:**
- Missing: `uploadImage` method on GalleryService
- Fix: Add method to services/gallery.service.ts
  ```typescript
  uploadImage(id: string, imageUrl: string) { /* ... */ }
  ```

### C. Missing methods on LiveStreamService (4 instances):

**controllers/liveStream.controller.ts:**
- Line 7: Missing `getSettings()` [static method expected]
- Line 23: Missing `updateSettings()` [static method expected]
- Line 40: Missing `startStream()`
- Line 57: Missing `stopStream()`

**Fix:** Add these methods to services/liveStream.service.ts as static or instance methods

### D. Missing method in LeaderService - Method name mismatch (1 instance):

**controllers/leaders.controller.ts:14:**
- Called: `getAllLeaders()`
- Exists: `getLeaders()` (different name)
- Fix: Either rename method in service to `getAllLeaders()` OR update controller to call `getLeaders()`

### E. Missing methods on AuthRepository (1 instance):

**services/auth.service.ts:29:**
- Missing: `findUserById(id)` method
- Fix: Add method to repositories/auth.repository.ts

### F. Missing methods on DashboardRepository (6 instances):

**services/dashboard.service.ts:**
- Line 13: Missing `getTotalSermons()`
- Line 14: Missing `getTotalEvents()`
- Line 15: Missing `getTotalMinistries()`
- Line 16: Missing `getTotalDonations()`
- Line 17: Missing `getTotalPrayerRequests()`
- Line 18: Missing `getTotalContactMessages()`

**Fix:** Implement these aggregation methods in repositories/dashboard.repository.ts

### G. Missing CRUD methods on EventRepository (5 instances):

**services/event.service.ts:**
- Line 12: Missing `findAll()`
- Line 16: Missing `findById(id)`
- Line 20: Missing `create(data)`
- Line 24: Missing `update(id, data)`
- Line 28: Missing `delete(id)`

### H. Missing CRUD methods on GalleryRepository (5 instances):

**services/gallery.service.ts:**
- Missing: `findAll()`, `findById()`, `create()`, `update()`, `delete()`
- Fix: Implement CRUD pattern in repositories/gallery.repository.ts

### I. Missing CRUD methods on MinistryRepository (5 instances):

**services/ministry.service.ts:**
- Lines 10-26: Missing `findAll()`, `findById()`, `create()`, `update()`, `delete()`
- Fix: Implement CRUD methods in repositories/ministry.repository.ts

---

## CATEGORY 5: TS2614 - Module has no exported member (default import suggestion) (9 instances)

**Root Cause:** Service classes are exported as default but imported as named, or vice versa.

**Affected Files & Fixes:**

| File | Line | Imported As | Issue | Fix |
|------|------|------------|-------|-----|
| controllers/auth.controller.ts | 2 | `AuthService` | Not exported as named | Export: `export class AuthService { }` |
| controllers/dashboard.controller.ts | 2 | `DashboardService` | Not exported as named | Export: `export class DashboardService { }` |
| controllers/settings.controller.ts | 2 | `SettingsService` | Not exported as named | Export: `export class SettingsService { }` |
| tests/auth.test.ts | 2 | `app` | Not exported from app.ts | Export: `export { app };` or `export default app;` |
| tests/auth.test.ts | 3 | `createUser`, `loginUser` | Not exported | Export these functions/methods from auth.service.ts |
| tests/authorization.test.ts | 2 | `app` | Not exported | Export: `export { app };` |
| tests/donations.test.ts | 2 | `app` | Not exported | Export: `export { app };` |
| tests/events.test.ts | 2 | `app` | Not exported | Export: `export { app };` |
| tests/ministries.test.ts | 2 | `app` | Not exported | Export: `export { app };` |
| tests/sermons.test.ts | 2 | `app` | Not exported | Export: `export { app };` |
| tests/services.test.ts | 2 | `app` | Not exported | Export: `export { app };` |

---

## CATEGORY 6: TS2724 - Module has no exported member (with 'Did you mean' suggestion) (3 instances)

**Root Cause:** Service files export instances instead of classes (e.g., `donationService` instead of `DonationService`).

**Affected & Fixes:**

| File | Line | Suggested Import | Current Export | Fix |
|------|------|-----------------|-----------------|-----|
| controllers/donations.controller.ts | 2 | `donationService` | exports instance | Change import: `import { donationService } from '../services/donation.service';` |
| controllers/events.controller.ts | 2 | `eventService` | exports instance | Change import: `import { eventService } from '../services/event.service';` |
| services/auth.service.ts | 4 | `comparePasswords` | exports function with 's' | Change import: `import { comparePasswords } from '../utils/password';` |

---

## CATEGORY 7: TS2459 - Declares locally, but not exported (4 instances)

**Root Cause:** Types/classes are imported but not re-exported from the module.

**Affected & Fixes:**

| File | Line | Missing Export | Source Import |
|------|------|-----------------|-----------------|
| controllers/services.controller.ts | 2 | `Service` | `../services/service.service` | Export from service.service.ts |
| services/donation.service.ts | 1 | `Donation` | `../repositories/donation.repository` | Export from donation.repository.ts |
| services/liveStream.service.ts | 1 | `LiveStream` | `../repositories/liveStream.repository` | Export from liveStream.repository.ts |
| services/service.service.ts | 1 | `Service` | `../repositories/service.repository` | Export from service.repository.ts |

**Fix Pattern:**
```typescript
// In donation.repository.ts, add:
export { Donation }; // or export interface/class Donation

// In services/donation.service.ts:
import { Donation } from '../repositories/donation.repository';
// Donation is now available
```

---

## CATEGORY 8: Other Specific Type Issues (11 instances)

### TS2551 - Property naming mismatch (1 instance)

**controllers/leaders.controller.ts:14:**
- Used: `getAllLeaders()`
- Exists: `getLeaders()`
- Fix: Rename method or update caller

### TS2322 - Type mismatch (1 instance)

**controllers/ministries.controller.ts:61:**
- Issue: `Type 'void' is not assignable to type 'boolean'`
- Root cause: `deleteMinistry()` returns void but method declared as returning boolean
- Fix: Change return type or remove type annotation:
  ```typescript
  const deleted = (await this.ministryService.deleteMinistry(id)) || true;
  ```

### TS2769 - No overload matches (1 instance)

**server.ts:28:**
- Issue: `Argument of type 'CorsOptions' is not assignable to parameter of type 'PathParams'`
- Root cause: `cors` variable is options object, not middleware function
- Fix: Change from `app.use(cors)` to `app.use(cors(corsOptions))`

### TS2554 - Wrong number of arguments (1 instance)

**services/ministry.service.ts:6:**
- Issue: `Expected 0 arguments, but got 1`
- Root cause: MinistryRepository constructor doesn't accept prisma instance
- Fix: Remove argument or update constructor

### TS7006 - Parameter implicitly has 'any' type (5 instances)

**Files & Fixes:**

| File | Line | Parameter | Fix |
|------|------|-----------|-----|
| middleware/auth.ts | 12 | `err`, `decoded` | Add types: `(err: Error \| null, decoded?: JwtPayload \| string) => { }` |
| utils/jwt.ts | 22 | `err`, `user` | Add types: `(err: Error \| null, user?: any) => { }` |

---

## PRIORITY FIX ORDER

### **Phase 1: Install Dependencies** (5 min)
```bash
npm install @prisma/client @prisma/cli --legacy-peer-deps
npm install --save-dev supertest @types/supertest --legacy-peer-deps
```

### **Phase 2: Create Missing Type Files** (15 min)
1. Create/update [src/types/api.ts](src/types/api.ts) - Export all domain types
2. Create/update [src/types/prisma.ts](src/types/prisma.ts) - Export Prisma types
3. Create/update [src/types/index.ts](src/types/index.ts) - Export Express Request augmentation

### **Phase 3: Fix Module Exports** (30 min)
1. Ensure all services export classes properly (AuthService, DashboardService, etc.)
2. Ensure app.ts exports `app`
3. Ensure repository files export their types (Donation, LiveStream, Service)
4. Fix validators exports (auth.validator, sermon.validator, service.validator)

### **Phase 4: Fix Import Paths** (10 min)
1. Change `import '../prisma/schema.prisma'` to `import from '../prisma'`
2. Fix service imports to use correct names (donationService, eventService)
3. Fix password util import from `comparePassword` to `comparePasswords`

### **Phase 5: Fix Type Errors** (30 min)
1. Add type guards to all catch blocks (61 × TS18046 errors)
2. Add type annotations to jwt callbacks (5 × TS7006 errors)
3. Fix middleware exports/imports for auth and authorize

### **Phase 6: Implement Missing Methods** (40 min)
1. Add CRUD methods to EventRepository, GalleryRepository, MinistryRepository
2. Add aggregation methods to DashboardRepository
3. Add methods to LiveStreamService (getSettings, updateSettings, startStream, stopStream)
4. Add uploadImage to GalleryService
5. Add findUserById to AuthRepository

### **Phase 7: Fix Specific Issues** (10 min)
1. Fix ministry service constructor call (remove prisma argument)
2. Fix cors usage in server.ts (wrap with cors() function)
3. Fix deleteMinistry return type issue
4. Rename getLeaders to getAllLeaders or update controller

---

## QUICK FIX CHECKLIST

- [ ] Install @prisma/client and supertest
- [ ] Create/update src/types/api.ts with all type interfaces
- [ ] Update src/types/index.ts with Express Request augmentation
- [ ] Fix all service exports to be named exports (AuthService, DashboardService, SettingsService)
- [ ] Export app from app.ts and server.ts
- [ ] Fix all catch block error types (use type guards)
- [ ] Add type annotations to JWT callbacks
- [ ] Fix import paths for schema.prisma
- [ ] Fix service instance imports (donationService, eventService)
- [ ] Implement missing CRUD and utility methods on repositories/services
- [ ] Create test utility files (utils.ts, testUtils.ts)

---

## ESTIMATED TIME TO FIX

- **Phase 1 (Dependencies):** 5 minutes
- **Phase 2 (Types):** 15 minutes
- **Phase 3 (Exports):** 30 minutes
- **Phase 4 (Imports):** 10 minutes
- **Phase 5 (Type Errors):** 30 minutes
- **Phase 6 (Methods):** 40 minutes
- **Phase 7 (Specific):** 10 minutes

**Total Estimated Time:** ~140 minutes (2.3 hours)

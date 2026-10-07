-- Preserve existing registrations while allowing visitors without email.
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventRegistration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "walletAddress" TEXT,
    "telegramId" TEXT,
    "questions" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_EventRegistration" ("id", "fullName", "email", "phone", "walletAddress", "telegramId", "questions", "createdAt")
SELECT "id", "fullName", "email", "phone", "walletAddress", "telegramId", "questions", "createdAt" FROM "EventRegistration";
DROP TABLE "EventRegistration";
ALTER TABLE "new_EventRegistration" RENAME TO "EventRegistration";
CREATE UNIQUE INDEX "EventRegistration_email_key" ON "EventRegistration"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

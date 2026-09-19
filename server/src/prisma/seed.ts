import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create sample users
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@ewcg.org',
            password: 'hashed_password', // Use a proper hashing function in production
            role: 'SUPER_ADMIN',
        },
    });

    const regularUser = await prisma.user.create({
        data: {
            email: 'user@ewcg.org',
            password: 'hashed_password', // Use a proper hashing function in production
            role: 'ADMIN',
        },
    });

    // Create sample sermons
    await prisma.sermon.createMany({
        data: [
            {
                title: 'Walking by Faith',
                speaker: 'Pastor John Doe',
                description: 'A sermon about faith and trust in God.',
                date: new Date('2026-05-18'),
                bibleVerse: '2 Corinthians 5:7',
                category: 'Faith',
                thumbnail: 'url_to_thumbnail',
                videoUrl: 'url_to_video',
                audioUrl: 'url_to_audio',
                pdfUrl: 'url_to_pdf',
                duration: 30,
            },
            {
                title: 'The Power of Prayer',
                speaker: 'Pastor Jane Smith',
                description: 'Exploring the importance of prayer in our lives.',
                date: new Date('2026-05-25'),
                bibleVerse: 'Philippians 4:6-7',
                category: 'Prayer',
                thumbnail: 'url_to_thumbnail',
                videoUrl: 'url_to_video',
                audioUrl: 'url_to_audio',
                pdfUrl: 'url_to_pdf',
                duration: 45,
            },
        ],
    });

    // Create sample events
    await prisma.event.createMany({
        data: [
            {
                title: 'Youth Conference',
                description: 'An inspiring conference for the youth.',
                startDate: new Date('2026-06-10'),
                endDate: new Date('2026-06-12'),
                startTime: '10:00',
                endTime: '17:00',
                location: 'Church Auditorium',
                image: 'url_to_event_image',
                organizer: 'Youth Ministry',
                registrationStatus: 'OPEN',
                registrationLink: 'url_to_registration',
            },
            {
                title: 'Community Outreach',
                description: 'Join us for a day of giving back to the community.',
                startDate: new Date('2026-07-15'),
                endDate: new Date('2026-07-15'),
                startTime: '09:00',
                endTime: '15:00',
                location: 'Community Park',
                image: 'url_to_event_image',
                organizer: 'Outreach Ministry',
                registrationStatus: 'CLOSED',
            },
        ],
    });

    // Create sample ministries
    await prisma.ministry.createMany({
        data: [
            {
                name: 'Children Ministry',
                description: 'A ministry dedicated to nurturing the faith of children.',
                leader: 'Sister Mary',
                meetingSchedule: 'Sundays at 9:00 AM',
                contactInfo: 'children@ewcg.org',
                activities: 'Bible stories, crafts, games',
                gallery: 'url_to_gallery',
            },
            {
                name: 'Youth Ministry',
                description: 'Empowering the youth to grow in their faith.',
                leader: 'Brother James',
                meetingSchedule: 'Fridays at 7:00 PM',
                contactInfo: 'youth@ewcg.org',
                activities: 'Discussions, outings, service projects',
                gallery: 'url_to_gallery',
            },
        ],
    });

    console.log('Seed data created successfully.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
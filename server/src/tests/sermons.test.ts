import request from 'supertest';
import { app } from '../app';
import { prisma } from '../prisma';

describe('Sermons API', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    await prisma.sermon.deleteMany({});
  });

  it('should create a new sermon', async () => {
    const response = await request(app)
      .post('/api/sermons')
      .send({
        title: 'Test Sermon',
        speaker: 'Pastor John',
        description: 'A sermon about faith.',
        date: new Date(),
        bibleVerse: 'Hebrews 11:1',
        category: 'Faith',
        thumbnail: 'http://example.com/thumbnail.jpg',
        videoUrl: 'http://example.com/video.mp4',
        audioUrl: 'http://example.com/audio.mp3',
        pdfUrl: 'http://example.com/notes.pdf',
        duration: '30:00',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data.id');
  });

  it('should retrieve all sermons', async () => {
    await prisma.sermon.create({
      data: {
        title: 'Test Sermon 1',
        speaker: 'Pastor John',
        description: 'A sermon about faith.',
        date: new Date(),
        bibleVerse: 'Hebrews 11:1',
        category: 'Faith',
        thumbnail: 'http://example.com/thumbnail1.jpg',
        videoUrl: 'http://example.com/video1.mp4',
        audioUrl: 'http://example.com/audio1.mp3',
        pdfUrl: 'http://example.com/notes1.pdf',
        duration: '30:00',
      },
    });

    const response = await request(app).get('/api/sermons');

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveLength(1);
  });

  it('should retrieve a sermon by ID', async () => {
    const sermon = await prisma.sermon.create({
      data: {
        title: 'Test Sermon 2',
        speaker: 'Pastor Jane',
        description: 'A sermon about love.',
        date: new Date(),
        bibleVerse: '1 Corinthians 13:4-7',
        category: 'Love',
        thumbnail: 'http://example.com/thumbnail2.jpg',
        videoUrl: 'http://example.com/video2.mp4',
        audioUrl: 'http://example.com/audio2.mp3',
        pdfUrl: 'http://example.com/notes2.pdf',
        duration: '45:00',
      },
    });

    const response = await request(app).get(`/api/sermons/${sermon.id}`);

    expect(response.status).toBe(200);
    expect(response.body.data.title).toBe('Test Sermon 2');
  });

  it('should update a sermon', async () => {
    const sermon = await prisma.sermon.create({
      data: {
        title: 'Test Sermon 3',
        speaker: 'Pastor Mike',
        description: 'A sermon about hope.',
        date: new Date(),
        bibleVerse: 'Romans 15:13',
        category: 'Hope',
        thumbnail: 'http://example.com/thumbnail3.jpg',
        videoUrl: 'http://example.com/video3.mp4',
        audioUrl: 'http://example.com/audio3.mp3',
        pdfUrl: 'http://example.com/notes3.pdf',
        duration: '35:00',
      },
    });

    const response = await request(app)
      .put(`/api/sermons/${sermon.id}`)
      .send({
        title: 'Updated Sermon Title',
      });

    expect(response.status).toBe(200);
    expect(response.body.data.title).toBe('Updated Sermon Title');
  });

  it('should delete a sermon', async () => {
    const sermon = await prisma.sermon.create({
      data: {
        title: 'Test Sermon 4',
        speaker: 'Pastor Anna',
        description: 'A sermon about joy.',
        date: new Date(),
        bibleVerse: 'Philippians 4:4',
        category: 'Joy',
        thumbnail: 'http://example.com/thumbnail4.jpg',
        videoUrl: 'http://example.com/video4.mp4',
        audioUrl: 'http://example.com/audio4.mp3',
        pdfUrl: 'http://example.com/notes4.pdf',
        duration: '50:00',
      },
    });

    const response = await request(app).delete(`/api/sermons/${sermon.id}`);

    expect(response.status).toBe(204);
  });
});
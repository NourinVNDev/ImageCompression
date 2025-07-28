import zlib from 'zlib';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ConvertCompression = async (req, res) => {
  try {
    const { username, email, userChoice } = req.body;

    const originalBuffer = req.file.buffer;
    const originalSize = (originalBuffer.length / 1024).toFixed(2) + ' KB';

    // Compress using Brotli (better for larger file types)
    const compressedBuffer = zlib.brotliCompressSync(originalBuffer); // or zlib.gzipSync()

    const compressedSize = (compressedBuffer.length / 1024).toFixed(2) + ' KB';

    // Save to DB using Prisma
    const saved = await prisma.userImage.create({
      data: {
        userName: username,
        email,
        originalImage: originalBuffer,
        compressedImage: compressedBuffer,
        originalSize,
        compressedSize,
       userChoice: parseInt(userChoice) || 0,
      },
    });

    res.status(200).json({
      message: "File compressed and saved!",
      saved,
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Compression failed" });
  }
};
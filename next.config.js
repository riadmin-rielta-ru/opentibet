/** @type {import('next').NextConfig} */
const nextConfig = {
    // статическая сборка в папку out/ для размещения на nginx
    output: 'export',
    // каждая страница собирается как папка с index.html (about-us/index.html),
    // поэтому nginx отдаёт их без дополнительных настроек
    trailingSlash: true,
    images: {
        domains: [
            'storage.googleapis.com',
			'img.opentibet.ru',
        ],
        imageSizes: [16, 20, 32, 40, 64, 128, 256, 512, 1024],
        deviceSizes: [1280, 1366, 1600, 1920],
        disableStaticImages: true,
        // оптимизация картинок требует сервера Next.js, в статике она недоступна
        unoptimized: true,
    },
}

module.exports = nextConfig

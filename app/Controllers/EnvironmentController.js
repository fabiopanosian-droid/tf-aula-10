function parseBoolean(value) {
    return ['true', '1', 'yes'].includes(String(value).toLowerCase());
}

function parsePort(value, fallback) {
    return Number(value || fallback);
}

export default function EnvironmentController(request, response) {
    const isDocker = parseBoolean(process.env.IS_DOCKER);

    return response.json({
        environment: isDocker ? 'docker' : 'local',
        database: {
            host: process.env.POSTGRES_HOST || 'localhost',
            port: parsePort(process.env.POSTGRES_PORT, isDocker ? 5432 : 6789),
        },
        web: {
            host: process.env.NODE_WEB_HOST || 'localhost',
            port: parsePort(
                isDocker ? process.env.NODE_WEB_EXTERNAL_PORT : process.env.NODE_WEB_PORT,
                isDocker ? 8080 : 3000
            ),
        },
    });
}

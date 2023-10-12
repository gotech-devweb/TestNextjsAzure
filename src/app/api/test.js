


export default async function handler(req, res) {
    const { path, token } = req.query;

    try {
        res.status(200).json({ message: 'Request timed out.' });
    } catch (error) {
        console.error('Error fetching MP3:', error);
        res.status(500).send('Error fetching MP3');
    }
}



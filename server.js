const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path'); // Require the 'path' module for resolving file paths

const app = express();

// Middleware
app.use(cors());
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ msg: 'No file uploaded...' });
        }

        const file = req.files.file;

        // Use path.join() for cross-platform path handling
        const uploadPath = path.join(__dirname, 'client', 'public', 'uploads', file.name);

        file.mv(uploadPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: 'Error occurred while uploading the file' });
            }

            res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

//tworzenie nowego konta
const handler = async (req, res) => {
	if (req.method !== 'POST') {
		return;
	}
	const data = req.body;

	const { login, email, password } = data;

	if (!login || login.trim().length < 5 || !email || !email.includes('@') || !password || password.trim().length < 5) {
		res.status(422).json({ message: 'Invalid input - password should also be at least 5 characters long.' });
		client.close();
		return;
	}

	const client = await connectToDatabase();

	const db = client.db();

	const existingUser = await db.collection('users').findOne({ email: email });

	if (existingUser) {
		res.status(422).json({ message: 'User existing already!' });
		client.close();
		return;
	}

	const hashedPassword = await hashPassword(password);

	const result = await db.collection('users').insertOne({
		login: login,
		email: email,
		password: hashedPassword,
	});

	res.status(201).json({ message: 'Created user!' });
	client.close();
};

export default handler;

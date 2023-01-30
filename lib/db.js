import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(
		'mongodb+srv://kubalinio:ZZfXPzjzQ7CRG6R9@cluster0.azkhkts.mongodb.net/signUpAllegro?retryWrites=true&w=majority'
	);

	return client;
};


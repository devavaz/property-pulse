import connectDB from '@/config/database';
import Property from '@/models/Property';



// get /api/properties

export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Property.find({});

    return Response.json(properties);
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
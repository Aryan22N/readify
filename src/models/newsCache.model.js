import mongoose from "mongoose";

const newsCacheSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  sourceName: String,
  sourceUrl: String,
  category: String,

  //jo ye GNEWS api hai vo publishedAt ka data string mai provide kr raha hai
  publishedAt: String,

  // TTL field (auto delete after 30 minutes)
  fetchedAt: {
    type: Date,
    default: Date.now,
    expires: 1800,
  },
});

const NewsCache =
  mongoose.models.NewsCache || mongoose.model("NewsCache", newsCacheSchema);

export default NewsCache;

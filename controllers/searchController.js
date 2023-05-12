import Ad from "../models/ads";
import Company from "../models/companies";

export const searchController = async (req, res) => {
    const { keyword } = req.query;
  
    try {
      const ads = await Ad.aggregate([
        {
          $lookup: {
            from: 'companies',
            localField: 'companyId',
            foreignField: '_id',
            as: 'company',
          },
        },
        {
          $unwind: '$company',
        },
        {
          $match: {
            $or: [
              { 'company.name': { $regex: keyword, $options: 'i' } },
              { primaryText: { $regex: keyword, $options: 'i' } },
              { headline: { $regex: keyword, $options: 'i' } },
              { description: { $regex: keyword, $options: 'i' } },
            ],
          },
        },
      ]);
  
      res.json(ads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
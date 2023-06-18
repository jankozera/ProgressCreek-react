type CoursesSingleType = {
  id: number;
  name: string;
  avatar: string;
  description: string;
  rating: number;
  lessons: {
    id: number;
    name: string;
    description: string;
    content?: string;
    youtube_link?: string;
    created_at: string;
    completed?: boolean;
  }[];
  reviews: {
    user: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
    };
    review: string;
    rate: number;
  }[];
};

export default CoursesSingleType;

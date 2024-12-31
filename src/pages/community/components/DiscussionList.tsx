import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';

interface Discussion {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  likes: number;
  views: number;
  timeAgo: string;
}

const discussions: Discussion[] = [
  {
    id: 1,
    title: "Best practices for React hooks",
    author: "hookMaster",
    category: "React",
    replies: 23,
    likes: 45,
    views: 230,
    timeAgo: "2h ago"
  },
  {
    id: 2,
    title: "Understanding TypeScript generics",
    author: "typeWizard",
    category: "TypeScript",
    replies: 15,
    likes: 32,
    views: 180,
    timeAgo: "4h ago"
  },
  {
    id: 3,
    title: "Advanced CSS Grid techniques",
    author: "gridNinja",
    category: "CSS",
    replies: 18,
    likes: 27,
    views: 150,
    timeAgo: "6h ago"
  }
];

const DiscussionList = () => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Discussions</h2>
        <Button variant="primary" size="sm">New Discussion</Button>
      </div>
      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>by {discussion.author}</span>
                  <span className="px-2 py-1 bg-accent-blue/20 rounded-full text-accent-blue">
                    {discussion.category}
                  </span>
                  <span>{discussion.timeAgo}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {discussion.replies}
                </span>
                <span className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {discussion.likes}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  {discussion.views}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default DiscussionList;
import React from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ForumSection = () => {
  const discussions = [
    {
      id: 1,
      title: "Help with React Hooks",
      author: "Sarah Dev",
      replies: 12,
      likes: 24,
      time: "2h ago"
    },
    {
      id: 2,
      title: "Best practices for API calls",
      author: "Mike Coder",
      replies: 8,
      likes: 15,
      time: "4h ago"
    }
  ];

  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Community Discussions</h2>
      </div>
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="hover:border-accent-blue/50 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                <p className="text-sm text-gray-400">Posted by {discussion.author} · {discussion.time}</p>
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
              </div>
            </div>
          </Card>
        ))}
        <div className="flex justify-end mt-4">
          <Button variant="secondary" size="sm">
            Start New Topic
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
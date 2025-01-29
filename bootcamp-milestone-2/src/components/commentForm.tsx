'use client';

import React, { useState } from 'react';

const CommentForm = ({ slug }: { slug: string }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !comment) {
      setStatusMessage('All fields are required.');
      return;
    }

    setLoading(true);
    setStatusMessage('Submitting your comment...');

    const time = new Date().toISOString();

    const baseURL = 'https://bootcamp-project-2024-delta.vercel.app/';

    try {
      const response = await fetch(`${baseURL}/api/Blogs/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, comment, time }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Comment submitted successfully!');
        setUser('');
        setComment('');
      } else {
        setStatusMessage(result.error || 'An error occurred.');
      }
    } catch (error) {
      setStatusMessage('Error submitting comment.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Name:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default CommentForm;






import PostAuthor from './PostAuthor';
import PostMetaTitle from './PostMetaTitle';

export default function InfoPost({
  title,
  category,
  date,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) {
  return (
    <>
      <PostMetaTitle title={title} category={category} date={date} />
      <h2 className='text-white/60 mt-5 w-10/12'>{shortDescription}</h2>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
      />
    </>
  );
}

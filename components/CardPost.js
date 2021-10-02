import InfoPost from '@components/InfoPost';
import Link from 'next/link';
export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href='/detail'>
        <img src={thumbnail} alt='' className='w-full rounded mb-4' />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

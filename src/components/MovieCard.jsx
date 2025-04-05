import { easeIn } from 'motion';
import { motion } from 'motion/react';

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.02,
        cursor: 'pointer',
      }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
      whileTap={{ scale: 0.98 }}
      className='movie-card'
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : '/NoMovie.png'
        }
        alt=''
      />
      <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
          <div className='rating'>
            <img src='./star.svg' alt='star icon' />
            <p> {vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>
              {release_date ? release_date.split('-')[0] : 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default MovieCard;

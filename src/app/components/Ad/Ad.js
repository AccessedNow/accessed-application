import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';
import setDescriptionStyle from './setDescriptionStyle';

function Ad(props) {
	const dispatch = useDispatch();

	let ad = {
    id: '5739d1fb4d27bc5341fd33b3',
    title: 'Cabos San Lucas',
    description: 'Best vacation destination',
    archive: false,
    image: 'assets/images/notes/beach.jpeg',
    time: '2018-05-10T04:01:06.587Z'
  }

	return (
		<FuseAnimate animation="transition.fadeIn" duration={100} delay={0}>
			<Card
				className={clsx('cursor-pointer', ad.className)}
			>
				{ad.image && ad.image !== '' && (
					<img src={ad.image} className="w-full block" alt="note" />
				)}

				{ad.title && ad.title !== '' && (
					<Typography className="p-16 pb-8 text-14 font-bold">{ad.title}</Typography>
				)}

				{ad.description && ad.description !== '' && (
					<Typography className="py-8 px-16" component="div">
						<div
							className={clsx('w-full break-words', props.variateDescSize ? 'font-200' : 'text-14')}
							ref={el => {
								setTimeout(() =>
									setDescriptionStyle(ad.description, el, ad.variateDescSize)
								);
							}}
						>
							{ad.description}
						</div>
					</Typography>
				)}

			</Card>
		</FuseAnimate>
	);
}

export default Ad;

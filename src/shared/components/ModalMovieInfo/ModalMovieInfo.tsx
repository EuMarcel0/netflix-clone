import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Icon, IconButton, IconButtonProps, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useModalMovieInfoContext } from '../../contexts';


const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -25%)',
	bgcolor: 'background.paper',
	borderRadius: '7px',
	boxShadow: 24,
	height: 'auto',
	overflowY: 'scroll',
};

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

export const ModalMovieInfo = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const mdDown = useMediaQuery(theme.breakpoints.down('md'));
	const personalBreakpoint = useMediaQuery(theme.breakpoints.down(400));
	const { movie, toggleMovieInfo } = useModalMovieInfoContext();

	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const URL_BASE_IMAGE_BANNER = 'https://image.tmdb.org/t/p/original';

	return (
		<Box
			width='60%'
			position='absolute'
			top='50px'
			left='20%'
			zIndex={999}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Card sx={{ width: '100%', maxWidth: 1024 }} >
				<CardHeader
					avatar={
						<Avatar sx={{}} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton
							onClick={toggleMovieInfo}
							sx={{
								backgroundColor: '#333',
								'&:hover': { backgroundColor: '#333' }
							}} aria-label="settings">
							<Icon sx={{ color: '#f5f5f5' }}>close</Icon>
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					component="img"
					height="194"
					image="/static/images/cards/paella.jpg"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<Icon>person</Icon>
					</IconButton>
					<IconButton aria-label="share">
						<Icon>person</Icon>
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<Icon>expand_more</Icon>
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>Method:</Typography>
						<Typography paragraph>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
							aside for 10 minutes.
						</Typography>
						<Typography paragraph>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
							medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
							occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
							large plate and set aside, leaving chicken and chorizo in the pan. Add
							pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
							stirring often until thickened and fragrant, about 10 minutes. Add
							saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
						<Typography paragraph>
							Add rice and stir very gently to distribute. Top with artichokes and
							peppers, and cook without stirring, until most of the liquid is absorbed,
							15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
							mussels, tucking them down into the rice, and cook again without
							stirring, until mussels have opened and rice is just tender, 5 to 7
							minutes more. (Discard any mussels that don&apos;t open.)
						</Typography>
						<Typography>
							Set aside off of the heat to let rest for 10 minutes, and then serve.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</Box>
	);
};

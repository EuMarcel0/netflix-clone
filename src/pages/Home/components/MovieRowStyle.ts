import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
	display: flex;
	justify-content: start;
`;

export const Thumbnail = styled.img`
	width: 270px;
	border-radius: 4px;
	margin-right: 8px;
	cursor: pointer;
	scale: .98;
	transition: all 0.2s linear;

	&:hover {
		scale: 1;
	}
`;

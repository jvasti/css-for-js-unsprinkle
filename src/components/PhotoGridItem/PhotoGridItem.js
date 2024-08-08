import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image>
          <source
            type="image/avif"
            srcSet={`${src.replace(".jpg", ".avif")} 1x,
                     ${src.replace(".jpg", "@2x.avif")} 2x,
                     ${src.replace(".jpg", "@3x.avif")} 3x`}
          />
          <source
            type="image/jpeg"
            srcSet={`${src} 1x,
                     ${src.replace(".jpg", "@2x.jpg")} 2x,
                     ${src.replace(".jpg", "@2x.jpg")} 3x`}
          />
          <img src={src} alt={alt} />
        </Image>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <TagWrapper>
            <Tag key={tag}>{tag}</Tag>
          </TagWrapper>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const TagWrapper = styled.div`
  overflow: clip;
`;

const Image = styled.picture`
  & img {
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
    object-fit: cover;
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: calc(0.875rem + 4px);
`;

export default PhotoGridItem;

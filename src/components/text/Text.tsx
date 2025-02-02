import React from 'react';

import { theme } from 'src/styles/constants/theme';
import { Color } from 'src/types';
import styled, { css } from 'styled-components';

const Subtitle = styled.span`
  font-size: ${theme.textSm};
  line-height: 16px;
  color: ${theme.grayD60};
`;
const InputLabel = styled.span`
  color: black;
  display: block;
  font-family: ${theme.fontSans};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: ${theme.spaceQuarter};
`;

export const textOthers = [
  'code',
  'subtitle',
  'small-header',
  'input-label',
] as const;
type OtherText = typeof textOthers[number];
export const textOptions = [
  {
    label: 'Page Header (3XL) · 34px (2.125rem)',
    size: '3xl',
    tag: 'h2',
    type: 'page-header', // default
    weight: '900',
  },
  {
    label: 'Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    type: 'header', // default
    tag: 'h3',
    weight: '700',
  },
  {
    label: 'Description Header (2XL) · 28px (1.75rem)',
    size: '2xl',
    tag: 'h3',
    type: 'description-header',
    weight: '700',
  },
  {
    label: 'Title (XL) • 22px (1.375rem)',
    size: 'xl',
    tag: 'h4',
    type: 'title',
    weight: '600',
  },
  {
    label: 'Bold Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'bold-subheader',
    weight: '700',
  },
  {
    label: 'Subheader (L) • 18px (1.125rem)',
    size: 'l',
    tag: 'h5',
    type: 'subheader',
    weight: '500',
  },
  {
    label: 'Bold Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'bold-label',
    weight: '700',
  },
  {
    label: 'Label (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'label',
    weight: '500',
  },
  {
    label: 'Body (Base) • 14px (.875rem)',
    size: 'base',
    tag: 'span',
    type: 'body',
    weight: '400',
  },
  {
    label: 'Small header (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'small-header',
    weight: '600',
  },
  {
    label: 'Caption (S) • 12px (.75rem)',
    size: 's',
    tag: 'span',
    type: 'caption',
    weight: '400',
  },
  {
    label: 'Hint text (XS) • 10px (.625rem)',
    size: 'xs',
    tag: 'span',
    type: 'hint-text',
    weight: '400',
  },
] as const;

const [
  pageHeaderOption,
  headerOption,
  descriptionHeaderOption,
  titleOption,
  boldSubheaderOption,
  subheaderOption,
  boldLabelOption,
  labelOption,
  bodyOption,
  smallheaderOption,
  captionOption,
  hintTextOption,
] = textOptions;

type Size = typeof textOptions[number]['size'];
type Type = typeof textOptions[number]['type'];
export type FontWeight = typeof textOptions[number]['weight'] | '800';
type Tag = typeof textOptions[number]['tag'];
type TypographyOverrides = {
  color?: Color;
  fontSize?: Size;
  fontWeight?: FontWeight;
  lineHeight?: Size;
};
type TypoDefaultProp = { size: Size; isUppercase?: Boolean };
const Typography = styled.h1<TypographyOverrides & TypoDefaultProp>`
  font-size: ${p => `var(--amino-font-size-${p.fontSize || p.size})`};
  font-weight: ${p => p.fontWeight};
  line-height: ${p => `var(--amino-line-height-${p.lineHeight || p.size})`};
  margin: 0;
  ${p =>
    p.color &&
    css`
      color: var(--amino-${p.color});
    `}
  ${p =>
    p.isUppercase &&
    css`
      text-transform: uppercase;
    `}
`;
type TextStyle = Type | OtherText;
export type TextProps = {
  children: React.ReactNode;
  className?: string;
  isUppercase?: boolean;
  tag?: Tag;
  title?: string;
  type?: TextStyle;
} & TypographyOverrides;

export const Text: React.FC<TextProps> = ({
  children,
  className,
  color,
  fontSize,
  fontWeight,
  isUppercase,
  lineHeight,
  tag,
  title,
  type,
}) => {
  const renderTypography = ({
    as,
    fontWeight: _fontWeight,
    size,
    isUppercase: _isUppercase,
  }: {
    as: Tag;
    fontWeight: FontWeight;
    size: Size;
    isUppercase?: boolean;
  }) => (
    <Typography
      as={as}
      color={color}
      className={className}
      fontSize={fontSize}
      fontWeight={_fontWeight}
      lineHeight={lineHeight}
      size={size}
      isUppercase={!!_isUppercase}
      title={title}
    >
      {children}
    </Typography>
  );
  switch (type) {
    case 'page-header':
      return renderTypography({
        as: tag || pageHeaderOption.tag,
        fontWeight: fontWeight || pageHeaderOption.weight,
        isUppercase,
        size: pageHeaderOption.size,
      });
    case 'header':
      return renderTypography({
        as: tag || headerOption.tag,
        fontWeight: fontWeight || headerOption.weight,
        isUppercase,
        size: headerOption.size,
      });
    case 'description-header':
      return renderTypography({
        as: tag || descriptionHeaderOption.tag,
        fontWeight: fontWeight || descriptionHeaderOption.weight,
        isUppercase,
        size: descriptionHeaderOption.size,
      });
    case 'title':
      return renderTypography({
        as: tag || titleOption.tag,
        fontWeight: fontWeight || titleOption.weight,
        isUppercase,
        size: titleOption.size,
      });
    case 'bold-subheader':
      return renderTypography({
        as: tag || boldSubheaderOption.tag,
        fontWeight: fontWeight || boldSubheaderOption.weight,
        isUppercase,
        size: boldSubheaderOption.size,
      });
    case 'subheader':
      return renderTypography({
        as: tag || subheaderOption.tag,
        fontWeight: fontWeight || subheaderOption.weight,
        isUppercase,
        size: subheaderOption.size,
      });
    case 'bold-label':
      return renderTypography({
        as: tag || boldLabelOption.tag,
        fontWeight: fontWeight || boldLabelOption.weight,
        isUppercase,
        size: boldLabelOption.size,
      });
    case 'label':
      return renderTypography({
        as: tag || labelOption.tag,
        fontWeight: fontWeight || labelOption.weight,
        isUppercase,
        size: labelOption.size,
      });

    case 'small-header':
      return renderTypography({
        as: tag || smallheaderOption.tag,
        fontWeight: fontWeight || smallheaderOption.weight,
        isUppercase: typeof isUppercase === 'boolean' ? isUppercase : true,
        size: smallheaderOption.size,
      });
    case 'caption':
      return renderTypography({
        as: tag || captionOption.tag,
        fontWeight: fontWeight || captionOption.weight,
        isUppercase,
        size: captionOption.size,
      });
    case 'hint-text':
      return renderTypography({
        as: tag || hintTextOption.tag,
        fontWeight: fontWeight || hintTextOption.weight,
        isUppercase,
        size: hintTextOption.size,
      });
    case 'subtitle':
      return (
        <Subtitle className={className} title={title}>
          {children}
        </Subtitle>
      );
    case 'input-label':
      return (
        <InputLabel className={className} title={title}>
          {children}
        </InputLabel>
      );
    case 'body':
    default:
      return renderTypography({
        as: tag || bodyOption.tag,
        fontWeight: fontWeight || bodyOption.weight,
        isUppercase,
        size: bodyOption.size,
      });
  }
};

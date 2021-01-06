/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useContext }from 'react';
import clsx from 'clsx';
import {MDXProvider} from '@mdx-js/react';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import MDXComponents from '@theme/MDXComponents';
import useBaseUrl from '@docusaurus/useBaseUrl';

import ThemeContext from "@theme/ThemeContext";

import styles from './styles.module.css';
import { TagStyle, StyledBlogItem, MarkdownSection } from './style'

import Eye from "../../../static/icons/eye.svg";

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
    views,
  } = props;
  const {date, permalink, tags, readingTime} = metadata;
  const {author, title, image, keywords} = frontMatter;



  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image, {absolute: true});

  // 是否为黑暗主题：
  const theme = useContext(ThemeContext);
  const { isDarkTheme } = theme;

  //修改英文为中文
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  const match = date.substring(0, 10).split('-');
  const year = match[0];
  const month = parseInt(match[1], 10);
  const day = parseInt(match[2], 10);

  {/*头部渲染*/}
  const renderPostHeader = () => {
    
    useEffect(()=>{
      console.log(date);
      console.log(year,month,day,truncated);
      console.log(isBlogPostPage);
    })

    return (
      <header>
        <TitleHeading
          className={
            clsx('margin-bottom--sm',
            'margin-top--sm',
            styles.blogPostTitle,
            isBlogPostPage ? "text--center" : ""
            )}
        >
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>


      </header>
    );
  };

  {/*标签渲染*/}
  const renderTags = () => {
    return(
        <div>
          {(tags.length > 0 || truncated) && (
            <div className="col margin-vert--lg">
              {isBlogPostPage && (
                <div className={clsx(
                  "margin-vert--md",
                  isBlogPostPage ? "text--center" : '',
                  "margin-vert--lg"
                )}>
                  <time dateTime={date} className={styles.blogPostDate}>
                    {year}年{month}月{day}日, {' '}
                    推荐阅读时间:{readingTime && <> {Math.ceil(readingTime)}分钟</>}
                  </time>
                </div>
              )}

            {tags.length > 0 && (
              <div className={clsx(
                "col",
                isBlogPostPage ? "text--center" : ''
              )}>
                {tags.map(({label, permalink: tagPermalink}) => (
                  <TagStyle>
                    <Link
                      key={tagPermalink}
                      className="margin-horiz--sm"
                      to={tagPermalink}>
                      {label}
                    </Link>
                  </TagStyle>
                ))}
              </div>
            )}
          </div>
          )}

        </div>
    )
  }

  return (
    <StyledBlogItem
      isDark={isDarkTheme}
      className={isBlogPostPage ? "margin-top--xl" : ""}
    >
      <Head>
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>

      <div className={clsx(
        'row',
        'margin-bottom--lg'
      )}>
          {/* 列表页日期 */}
          {!isBlogPostPage && (
            <div className="col col--2 padding-right--lg margin-bottom--lg">
              <div class="post__date">
                <div class="post__day">{day}</div>
                <div class="post__year_month">
                  {year}年{month}月
                </div>
              </div>
            </div>
          )}
        <article className={clsx(
          'col col--10',
          !isBlogPostPage ? 'margin-bottom--lg' : undefined
        )}>
          {renderPostHeader()}
          {renderTags()}

          {/*Markdown中间正文部分*/}
          <section className={clsx(
            "markdown",
            styles.section
          )}>
            <MarkdownSection>
              <MDXProvider components={MDXComponents} classname={clsx(styles.mdx)}>{children}</MDXProvider>
            </MarkdownSection>
          </section>

          {(
            <div className={clsx(
              "article__footer",
              styles.footer
            )}>
              <Link
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}
              >
                {!isBlogPostPage && (<strong  className={styles.readMore}>阅读原文</strong>)}
              </Link>

              {!isBlogPostPage && (
              <span className="footer__read_count">
                <Eye
                  color={isDarkTheme ? "#76baff" : "#1e81e3"}
                  style={{ verticalAlign: "middle" }}
                />{" "}
                {views}
              </span>
            )}
            </div>
          )}
        </article>
      </div>
    </StyledBlogItem>
  );
}

export default BlogPostItem;
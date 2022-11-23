import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layout";

export async function getStaticProps({params}) {
    const postDataa = await getPostData(params.id);
    return {
        props: {
            postDataa,
        },
    };
}



export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

export default function Postt({postDataa}) {
    return (
    <Layout>
        <Head>
            <title>{postDataa.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}></h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postDataa.date}></Date>
            </div>
            <div dangerouslySetInnerHTML={{__html: postDataa.contentHtml}}></div>
        </article>
    </Layout>
    );
}
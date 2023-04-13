import Document, { Html, Head, Main, NextScript, } from 'next/document'
import { JssProvider, SheetsRegistry, createGenerateId } from 'react-jss'
import type { DocumentInitialProps, DocumentContext } from 'next/document';

export default class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const registry = new SheetsRegistry();    
    const originalRenderPage = ctx.renderPage;
    const generateId = createGenerateId();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style>{registry.toString()}</style>
        </>
      ),
    };

  }

  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

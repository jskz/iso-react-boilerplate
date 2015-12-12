# iso-react-boilerplate

I wanted a very plain boilerplate for isomorphic [React](https://github.com/facebook/react) projects without the overhead
of stripping away this or that popular take on immutables when I just want to
tinker.

Routes are matched and rendered on the server before the client React bundle
takes over.  [react-helmet](https://github.com/nfl/react-helmet) is included to
demonstrate the precedence of nested Helmet components.

### Setup

```
git clone https://github.com/jskz/iso-react-boilerplate.git myproject
cd myproject
npm install
```

### Usage

```
webpack
npm start
```

Visit [http://localhost:8080](http://localhost:8080/)

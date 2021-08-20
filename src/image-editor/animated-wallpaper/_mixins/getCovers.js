
import makeCoverUrl from "@output-mixins/makeCoverUrl";

export default {
  mixins: [ makeCoverUrl ],
  methods: {
    getCovers: function() {
      
      let vue = this;
      
      if ( this.editorCovers ) {
        this.covers.all = _.map( this.editorCovers, function( book ) {
          return vue.makeCoverUrl(book.cover);
        });
      }
      else {
        let coverURLs = "https://m.media-amazon.com/images/I/51ZDeiZRw0L._SL500_.jpg, https://m.media-amazon.com/images/I/51D4nAqVGjL._SL500_.jpg, https://m.media-amazon.com/images/I/51RTAHcNg+L._SL500_.jpg, https://m.media-amazon.com/images/I/51UIIxDThiL._SL500_.jpg, https://m.media-amazon.com/images/I/51L3Gfv0LhL._SL500_.jpg, https://m.media-amazon.com/images/I/51Cgl3pqXTL._SL500_.jpg, https://m.media-amazon.com/images/I/51vQdjSSIBL._SL500_.jpg, https://m.media-amazon.com/images/I/51TiFvMgxnL._SL500_.jpg, https://m.media-amazon.com/images/I/51TV9oy9pVL._SL500_.jpg, https://m.media-amazon.com/images/I/61ZcyJ984IL._SL500_.jpg, https://m.media-amazon.com/images/I/51AkkcpOQNL._SL500_.jpg, https://m.media-amazon.com/images/I/511+rEamwYL._SL500_.jpg, https://m.media-amazon.com/images/I/51HhW3xi5wL._SL500_.jpg, https://m.media-amazon.com/images/I/51w8Qyox1ZL._SL500_.jpg, https://m.media-amazon.com/images/I/51DhbdGuYXS._SL500_.jpg, https://m.media-amazon.com/images/I/51bB2+uJbOS._SL500_.jpg, https://m.media-amazon.com/images/I/61q2pW5DP9L._SL500_.jpg, https://m.media-amazon.com/images/I/51V59Il5l2L._SL500_.jpg, https://m.media-amazon.com/images/I/51PZDk9hrEL._SL500_.jpg, https://m.media-amazon.com/images/I/61ZJRn6hsuL._SL500_.jpg, https://m.media-amazon.com/images/I/513S2YuaUVL._SL500_.jpg, https://m.media-amazon.com/images/I/519utdmGtAS._SL500_.jpg, https://m.media-amazon.com/images/I/51qbC70S0TL._SL500_.jpg, https://m.media-amazon.com/images/I/51Cu+-Rp64L._SL500_.jpg, https://m.media-amazon.com/images/I/613QUpbbF7L._SL500_.jpg, https://m.media-amazon.com/images/I/51Rmd59jyQL._SL500_.jpg, https://m.media-amazon.com/images/I/516QZbgLocL._SL500_.jpg, https://m.media-amazon.com/images/I/51DhyAeAbiL._SL500_.jpg, https://m.media-amazon.com/images/I/61y82uxCwwL._SL500_.jpg, https://m.media-amazon.com/images/I/416NJMOVegL._SL500_.jpg, https://m.media-amazon.com/images/I/41UZ6zxzfIL._SL500_.jpg, https://m.media-amazon.com/images/I/61eYWnuh0yL._SL500_.jpg, https://m.media-amazon.com/images/I/515RG4b2SSL._SL500_.jpg, https://m.media-amazon.com/images/I/515TbWnVh1L._SL500_.jpg, https://m.media-amazon.com/images/I/51d1tLSnW-L._SL500_.jpg, https://m.media-amazon.com/images/I/61NBnW0IfSL._SL500_.jpg, https://m.media-amazon.com/images/I/51Lhs041m5L._SL500_.jpg, https://m.media-amazon.com/images/I/41tOkOJqbmL._SL500_.jpg, https://m.media-amazon.com/images/I/51+yYyDpLdL._SL500_.jpg, https://m.media-amazon.com/images/I/51u7NOVemfL._SL500_.jpg, https://m.media-amazon.com/images/I/51M+L8mDEZL._SL500_.jpg, https://m.media-amazon.com/images/I/514ppaAxSVL._SL500_.jpg, https://m.media-amazon.com/images/I/51SqSXg-SsL._SL500_.jpg, https://m.media-amazon.com/images/I/51dK9YA8MAL._SL500_.jpg, https://m.media-amazon.com/images/I/51T7ZRMC2YL._SL500_.jpg, https://m.media-amazon.com/images/I/51bTLjsxJFL._SL500_.jpg, https://m.media-amazon.com/images/I/51ynogv6BzL._SL500_.jpg, https://m.media-amazon.com/images/I/51clzp-QXnL._SL500_.jpg, https://m.media-amazon.com/images/I/51eo5JddZ9L._SL500_.jpg, https://m.media-amazon.com/images/I/51FhEG1ePkL._SL500_.jpg, https://m.media-amazon.com/images/I/51vAk7e-bDL._SL500_.jpg, https://m.media-amazon.com/images/I/51Q6a-I2n6L._SL500_.jpg, https://m.media-amazon.com/images/I/61JB23mh7LL._SL500_.jpg, https://m.media-amazon.com/images/I/511JBxWB7zL._SL500_.jpg, https://m.media-amazon.com/images/I/51vZ9-hy1mL._SL500_.jpg, https://m.media-amazon.com/images/I/51vE4NWvryL._SL500_.jpg, https://m.media-amazon.com/images/I/51fVfjW0VBL._SL500_.jpg, https://m.media-amazon.com/images/I/51upHRdXyyS._SL500_.jpg, https://m.media-amazon.com/images/I/51N8bk4dh5L._SL500_.jpg, https://m.media-amazon.com/images/I/513j9SwsXNL._SL500_.jpg, https://m.media-amazon.com/images/I/51L+-d+fg1L._SL500_.jpg, https://m.media-amazon.com/images/I/61iU9gvRf0L._SL500_.jpg, https://m.media-amazon.com/images/I/51KyrM4XjdL._SL500_.jpg, https://m.media-amazon.com/images/I/51dwHM1oIlL._SL500_.jpg, https://m.media-amazon.com/images/I/51vtADi3DNL._SL500_.jpg, https://m.media-amazon.com/images/I/613Evn1OK4L._SL500_.jpg, https://m.media-amazon.com/images/I/51PanlhVGaL._SL500_.jpg, https://m.media-amazon.com/images/I/61wJE3sXzeL._SL500_.jpg, https://m.media-amazon.com/images/I/51Oohee8IZL._SL500_.jpg, https://m.media-amazon.com/images/I/51eVUhAq6GL._SL500_.jpg, https://m.media-amazon.com/images/I/515eeFy8ToL._SL500_.jpg, https://m.media-amazon.com/images/I/51bMCOnKZRL._SL500_.jpg, https://m.media-amazon.com/images/I/51JEaDceP4L._SL500_.jpg, https://m.media-amazon.com/images/I/51KkCLn7n1L._SL500_.jpg, https://m.media-amazon.com/images/I/61+du87VUQL._SL500_.jpg, https://m.media-amazon.com/images/I/51Zpj9K3YRL._SL500_.jpg, https://m.media-amazon.com/images/I/51qX+-n90bL._SL500_.jpg, https://m.media-amazon.com/images/I/519jRMQ3mfL._SL500_.jpg, https://m.media-amazon.com/images/I/51CesVvOAGL._SL500_.jpg, https://m.media-amazon.com/images/I/51mnIvkevhL._SL500_.jpg, https://m.media-amazon.com/images/I/51SteOEMD8L._SL500_.jpg, https://m.media-amazon.com/images/I/5177lTQK2FL._SL500_.jpg, https://m.media-amazon.com/images/I/61H99l0CZCL._SL500_.jpg, https://m.media-amazon.com/images/I/518W-KlaJ+L._SL500_.jpg, https://m.media-amazon.com/images/I/51C9B8zExOL._SL500_.jpg, https://m.media-amazon.com/images/I/51Nq12Z2+hL._SL500_.jpg, https://m.media-amazon.com/images/I/51nLkkWSmYL._SL500_.jpg, https://m.media-amazon.com/images/I/51U1eDOTYGL._SL500_.jpg, https://m.media-amazon.com/images/I/51Tt64E9PYL._SL500_.jpg, https://m.media-amazon.com/images/I/51u7IQg3-iL._SL500_.jpg, https://m.media-amazon.com/images/I/51eCLOu+1AL._SL500_.jpg, https://m.media-amazon.com/images/I/51zHHVTNj3L._SL500_.jpg, https://m.media-amazon.com/images/I/618S2jGqPcL._SL500_.jpg, https://m.media-amazon.com/images/I/51lCOwfmcNL._SL500_.jpg, https://m.media-amazon.com/images/I/51gevFKAUtL._SL500_.jpg, https://m.media-amazon.com/images/I/61VjtL9s7FL._SL500_.jpg, https://m.media-amazon.com/images/I/617OPv+JJaL._SL500_.jpg, https://m.media-amazon.com/images/I/51WYTJaHxgL._SL500_.jpg, https://m.media-amazon.com/images/I/51x-3fL8gVL._SL500_.jpg, https://m.media-amazon.com/images/I/51IpXCCf14L._SL500_.jpg, https://m.media-amazon.com/images/I/51xanSA5fTL._SL500_.jpg, https://m.media-amazon.com/images/I/51CE3t95FqL._SL500_.jpg, https://m.media-amazon.com/images/I/51NHQgZ8StL._SL500_.jpg, https://m.media-amazon.com/images/I/51bQ5pw9PcL._SL500_.jpg, https://m.media-amazon.com/images/I/51JmRgbxrKL._SL500_.jpg, https://m.media-amazon.com/images/I/512qyBNv1PL._SL500_.jpg, https://m.media-amazon.com/images/I/61hgKzt4+DL._SL500_.jpg, https://m.media-amazon.com/images/I/51IoByYoNEL._SL500_.jpg, https://m.media-amazon.com/images/I/511xY2K4qfL._SL500_.jpg, https://m.media-amazon.com/images/I/61Q+vzlem8L._SL500_.jpg, https://m.media-amazon.com/images/I/51QyAWUfjbL._SL500_.jpg, https://m.media-amazon.com/images/I/51HBtJnJPkL._SL500_.jpg, https://m.media-amazon.com/images/I/616GoPe7S8L._SL500_.jpg, https://m.media-amazon.com/images/I/51pp4BKuITL._SL500_.jpg, https://m.media-amazon.com/images/I/51tcEVSPbCL._SL500_.jpg, https://m.media-amazon.com/images/I/51j-kIOsK8L._SL500_.jpg, https://m.media-amazon.com/images/I/5188WzZ1JcL._SL500_.jpg, https://m.media-amazon.com/images/I/612ctxaeBZL._SL500_.jpg, https://m.media-amazon.com/images/I/41zYSSxYVhL._SL500_.jpg, https://m.media-amazon.com/images/I/515kqUhDOUL._SL500_.jpg, https://m.media-amazon.com/images/I/61okWOoJQyL._SL500_.jpg, https://m.media-amazon.com/images/I/51e9pTqPdaL._SL500_.jpg, https://m.media-amazon.com/images/I/51Ak3oMiskL._SL500_.jpg, https://m.media-amazon.com/images/I/61ESlzM-UBL._SL500_.jpg, https://m.media-amazon.com/images/I/510+Ti3pOLL._SL500_.jpg, https://m.media-amazon.com/images/I/51WoSEOGHyL._SL500_.jpg, https://m.media-amazon.com/images/I/51LXE2IkpKL._SL500_.jpg, https://m.media-amazon.com/images/I/51KLrFwp+UL._SL500_.jpg, https://m.media-amazon.com/images/I/51DTM6ksoyL._SL500_.jpg, https://m.media-amazon.com/images/I/51ldwxwoc7L._SL500_.jpg, https://m.media-amazon.com/images/I/51ZpZrK5VAL._SL500_.jpg, https://m.media-amazon.com/images/I/51wvsDm-X0L._SL500_.jpg, https://m.media-amazon.com/images/I/511mXqZujvL._SL500_.jpg, https://m.media-amazon.com/images/I/41ynEZWWPGL._SL500_.jpg, https://m.media-amazon.com/images/I/51r88NpWceL._SL500_.jpg, https://m.media-amazon.com/images/I/51dbFECLfRL._SL500_.jpg, https://m.media-amazon.com/images/I/51DVE2k9h3L._SL500_.jpg, https://m.media-amazon.com/images/I/51U2Ad1sJrL._SL500_.jpg, https://m.media-amazon.com/images/I/61tWmaHim7L._SL500_.jpg, https://m.media-amazon.com/images/I/51UhxpUpVqL._SL500_.jpg, https://m.media-amazon.com/images/I/515VUabCKJL._SL500_.jpg, https://m.media-amazon.com/images/I/41l33sdmpyL._SL500_.jpg, https://m.media-amazon.com/images/I/519U+U6RTSL._SL500_.jpg, https://m.media-amazon.com/images/I/51xCoM6hEaL._SL500_.jpg, https://m.media-amazon.com/images/I/51INtlX2NSL._SL500_.jpg, https://m.media-amazon.com/images/I/61uCMZspTeL._SL500_.jpg, https://m.media-amazon.com/images/I/51N1Em9vNZL._SL500_.jpg, https://m.media-amazon.com/images/I/51yqZi5LSKL._SL500_.jpg, https://m.media-amazon.com/images/I/61fmTnfGHeL._SL500_.jpg, https://m.media-amazon.com/images/I/51QoxNf00GL._SL500_.jpg, https://m.media-amazon.com/images/I/51GoKb5whcL._SL500_.jpg, https://m.media-amazon.com/images/I/51GKASb4n5L._SL500_.jpg, https://m.media-amazon.com/images/I/61NCKMqeh0L._SL500_.jpg, https://m.media-amazon.com/images/I/51E79Nq6ZrL._SL500_.jpg, https://m.media-amazon.com/images/I/51HMqk8dDwL._SL500_.jpg, https://m.media-amazon.com/images/I/51LE+fvC0FL._SL500_.jpg, https://m.media-amazon.com/images/I/61XYdLP3tPL._SL500_.jpg, https://m.media-amazon.com/images/I/51wdCMbYZQL._SL500_.jpg, https://m.media-amazon.com/images/I/51xTUna2+3L._SL500_.jpg, https://m.media-amazon.com/images/I/51+-WalUy7L._SL500_.jpg, https://m.media-amazon.com/images/I/41IduWH96BL._SL500_.jpg, https://m.media-amazon.com/images/I/513uPNWBmgL._SL500_.jpg, https://m.media-amazon.com/images/I/51o1prwIQYL._SL500_.jpg, https://m.media-amazon.com/images/I/61WmvW367-L._SL500_.jpg, https://m.media-amazon.com/images/I/61E2i+B4emL._SL500_.jpg, https://m.media-amazon.com/images/I/51G6aIPhfdL._SL500_.jpg, https://m.media-amazon.com/images/I/51HdT9z52zL._SL500_.jpg, https://m.media-amazon.com/images/I/51NnUb3HV2L._SL500_.jpg, https://m.media-amazon.com/images/I/61tuZtK6xoL._SL500_.jpg, https://m.media-amazon.com/images/I/51pCNRgIbAL._SL500_.jpg, https://m.media-amazon.com/images/I/51JKHtAf-XL._SL500_.jpg, https://m.media-amazon.com/images/I/51yBtfUZ9-L._SL500_.jpg, https://m.media-amazon.com/images/I/51-wdnvkHcL._SL500_.jpg, https://m.media-amazon.com/images/I/61cYoBIcXSL._SL500_.jpg, https://m.media-amazon.com/images/I/61hxzGC1H7L._SL500_.jpg, https://m.media-amazon.com/images/I/61CEI+8TpdL._SL500_.jpg, https://m.media-amazon.com/images/I/51MMvSCYEUL._SL500_.jpg, https://m.media-amazon.com/images/I/61QRCToto4L._SL500_.jpg, https://m.media-amazon.com/images/I/51OcMmbdlmL._SL500_.jpg, https://m.media-amazon.com/images/I/518uCBISHyL._SL500_.jpg, https://m.media-amazon.com/images/I/515mXs+-DPL._SL500_.jpg, https://m.media-amazon.com/images/I/51DkZcHAvNL._SL500_.jpg, https://m.media-amazon.com/images/I/51evwEA4ZrL._SL500_.jpg, https://m.media-amazon.com/images/I/61PwPwApNgL._SL500_.jpg, https://m.media-amazon.com/images/I/51xrhneDveL._SL500_.jpg, https://m.media-amazon.com/images/I/61p9wb-Ck8L._SL500_.jpg, https://m.media-amazon.com/images/I/51TGAUQ+mtL._SL500_.jpg, https://m.media-amazon.com/images/I/51dDDfOcdVL._SL500_.jpg, https://m.media-amazon.com/images/I/51PPMWpTLXL._SL500_.jpg, https://m.media-amazon.com/images/I/51HGjAHuWLL._SL500_.jpg, https://m.media-amazon.com/images/I/51YhFj5UylL._SL500_.jpg, https://m.media-amazon.com/images/I/51Vf55H1nqL._SL500_.jpg, https://m.media-amazon.com/images/I/51AIGcClYGL._SL500_.jpg, https://m.media-amazon.com/images/I/51zWD0-LZ6L._SL500_.jpg, https://m.media-amazon.com/images/I/51uFZ5m7nuL._SL500_.jpg, https://m.media-amazon.com/images/I/51-RuaOmztL._SL500_.jpg, https://m.media-amazon.com/images/I/61WPUsI7U9L._SL500_.jpg, https://m.media-amazon.com/images/I/51P1yYma0IL._SL500_.jpg, https://m.media-amazon.com/images/I/51fI88VuYNL._SL500_.jpg, https://m.media-amazon.com/images/I/51NVKq3-ulL._SL500_.jpg, https://m.media-amazon.com/images/I/51l9lgYeYeL._SL500_.jpg, https://m.media-amazon.com/images/I/51nJbmEw60L._SL500_.jpg, https://m.media-amazon.com/images/I/515+QN7tnbL._SL500_.jpg, https://m.media-amazon.com/images/I/51d6YgMWC9L._SL500_.jpg, https://m.media-amazon.com/images/I/51-kJmXI51L._SL500_.jpg, https://m.media-amazon.com/images/I/41buYWOmfuL._SL500_.jpg, https://m.media-amazon.com/images/I/61z1+4cRzFL._SL500_.jpg, https://m.media-amazon.com/images/I/51hWqx9-JZS._SL500_.jpg, https://m.media-amazon.com/images/I/51Tf-TzdhrL._SL500_.jpg, https://m.media-amazon.com/images/I/51OSV2NQ+TL._SL500_.jpg, https://m.media-amazon.com/images/I/51wY49Ze09L._SL500_.jpg, https://m.media-amazon.com/images/I/515FdQlCVUL._SL500_.jpg, https://m.media-amazon.com/images/I/51k5yseXptL._SL500_.jpg, https://m.media-amazon.com/images/I/51PNSYMThFL._SL500_.jpg, https://m.media-amazon.com/images/I/51LHHTpFMwL._SL500_.jpg, https://m.media-amazon.com/images/I/51o4eQDiTWL._SL500_.jpg, https://m.media-amazon.com/images/I/51Bf++qIrJL._SL500_.jpg, https://m.media-amazon.com/images/I/517lNfMF5lL._SL500_.jpg, https://m.media-amazon.com/images/I/51NnJF-enGL._SL500_.jpg, https://m.media-amazon.com/images/I/51k2SKhUTnL._SL500_.jpg, https://m.media-amazon.com/images/I/51+YMziuQcL._SL500_.jpg, https://m.media-amazon.com/images/I/51XG-h-04wL._SL500_.jpg, https://m.media-amazon.com/images/I/51UDWvzOqeL._SL500_.jpg, https://m.media-amazon.com/images/I/41WAh8I3MyL._SL500_.jpg, https://m.media-amazon.com/images/I/51o34RLoNiL._SL500_.jpg, https://m.media-amazon.com/images/I/41v+4D1wHnL._SL500_.jpg, https://m.media-amazon.com/images/I/61MoXes9rdL._SL500_.jpg, https://m.media-amazon.com/images/I/617ySf3g9bL._SL500_.jpg, https://m.media-amazon.com/images/I/61dRHYEZFsL._SL500_.jpg, https://m.media-amazon.com/images/I/51LA8pT6haL._SL500_.jpg, https://m.media-amazon.com/images/I/51SN+rAdVdL._SL500_.jpg, https://m.media-amazon.com/images/I/51PG24044WL._SL500_.jpg, https://m.media-amazon.com/images/I/51QOfE33NYL._SL500_.jpg, https://m.media-amazon.com/images/I/51S8BtrZ7TL._SL500_.jpg, https://m.media-amazon.com/images/I/517CKFuPxVL._SL500_.jpg, https://m.media-amazon.com/images/I/51Us6vAMrsL._SL500_.jpg, https://m.media-amazon.com/images/I/51f1gr7GznL._SL500_.jpg, https://m.media-amazon.com/images/I/61x22XbYzAL._SL500_.jpg, https://m.media-amazon.com/images/I/51+HIF0CVcL._SL500_.jpg, https://m.media-amazon.com/images/I/51EAQYhcZjL._SL500_.jpg, https://m.media-amazon.com/images/I/51nJzi9AIzL._SL500_.jpg, https://m.media-amazon.com/images/I/61olhaTpCpL._SL500_.jpg, https://m.media-amazon.com/images/I/61IlBB6KKrL._SL500_.jpg, https://m.media-amazon.com/images/I/51cM1xXdA-L._SL500_.jpg, https://m.media-amazon.com/images/I/51hHoC1-kXL._SL500_.jpg, https://m.media-amazon.com/images/I/51Bq-1a-bzS._SL500_.jpg, https://m.media-amazon.com/images/I/51Urx8CHRfL._SL500_.jpg, https://m.media-amazon.com/images/I/61h4TKhp7NL._SL500_.jpg, https://m.media-amazon.com/images/I/51rd998J9OL._SL500_.jpg, https://m.media-amazon.com/images/I/51Ip7VcQqCL._SL500_.jpg, https://m.media-amazon.com/images/I/51kpR57aXdL._SL500_.jpg, https://m.media-amazon.com/images/I/41qRtS8ksgS._SL500_.jpg, https://m.media-amazon.com/images/I/51w0tskMvUL._SL500_.jpg, https://m.media-amazon.com/images/I/51+7gP1bchL._SL500_.jpg, https://m.media-amazon.com/images/I/51TuLwE3EsL._SL500_.jpg, https://m.media-amazon.com/images/I/512K3yAlYlL._SL500_.jpg, https://m.media-amazon.com/images/I/51I5GD+LgIL._SL500_.jpg, https://m.media-amazon.com/images/I/51zT3+M7V2L._SL500_.jpg, https://m.media-amazon.com/images/I/41LIghGJzeL._SL500_.jpg, https://m.media-amazon.com/images/I/51kfeR3eJ1L._SL500_.jpg, https://m.media-amazon.com/images/I/51bMDPvF71L._SL500_.jpg, https://m.media-amazon.com/images/I/51hdjjAC8+L._SL500_.jpg, https://m.media-amazon.com/images/I/51V7uXIhtBL._SL500_.jpg, https://m.media-amazon.com/images/I/51gcRvd2WKL._SL500_.jpg, https://m.media-amazon.com/images/I/51hOHD-l+SL._SL500_.jpg, https://m.media-amazon.com/images/I/61ckWpiIreL._SL500_.jpg, https://m.media-amazon.com/images/I/51dwuxmTlkL._SL500_.jpg, https://m.media-amazon.com/images/I/51nhbNfW6pL._SL500_.jpg, https://m.media-amazon.com/images/I/51kczMhEZVL._SL500_.jpg, https://m.media-amazon.com/images/I/61byd8nimfL._SL500_.jpg, https://m.media-amazon.com/images/I/515Dx-qnY4L._SL500_.jpg, https://m.media-amazon.com/images/I/51mXcz4ec3L._SL500_.jpg, https://m.media-amazon.com/images/I/51JyejLZM0L._SL500_.jpg, https://m.media-amazon.com/images/I/51TgDf0pK2L._SL500_.jpg, https://m.media-amazon.com/images/I/51cC81zntUL._SL500_.jpg, https://m.media-amazon.com/images/I/51fFsAaQ3eL._SL500_.jpg, https://m.media-amazon.com/images/I/51qUM9dLSDL._SL500_.jpg, https://m.media-amazon.com/images/I/51gSCt1nqgL._SL500_.jpg, https://m.media-amazon.com/images/I/51Ycgpi9i4L._SL500_.jpg, https://m.media-amazon.com/images/I/61ZyKoD7MLL._SL500_.jpg, https://m.media-amazon.com/images/I/51jzB5DFFcL._SL500_.jpg, https://m.media-amazon.com/images/I/51QNIbZh6XL._SL500_.jpg, https://m.media-amazon.com/images/I/51SscC2ij6L._SL500_.jpg, https://m.media-amazon.com/images/I/5111VMzSgrL._SL500_.jpg, https://m.media-amazon.com/images/I/61QXT0oijSL._SL500_.jpg, https://m.media-amazon.com/images/I/51edrndBNeL._SL500_.jpg, https://m.media-amazon.com/images/I/517cP93jbeL._SL500_.jpg, https://m.media-amazon.com/images/I/5187iyMw9fL._SL500_.jpg, https://m.media-amazon.com/images/I/51W7TUVhxnL._SL500_.jpg, https://m.media-amazon.com/images/I/51djFmSx-oL._SL500_.jpg, https://m.media-amazon.com/images/I/51ipE1IlD8L._SL500_.jpg, https://m.media-amazon.com/images/I/515LCj+AuvL._SL500_.jpg, https://m.media-amazon.com/images/I/51CMmyjK+nL._SL500_.jpg, https://m.media-amazon.com/images/I/41TGCNS82-L._SL500_.jpg, https://m.media-amazon.com/images/I/61CfMDYNILL._SL500_.jpg, https://m.media-amazon.com/images/I/51UWjyLw-wL._SL500_.jpg, https://m.media-amazon.com/images/I/51cUtigL-HL._SL500_.jpg, https://m.media-amazon.com/images/I/5127DBwYaVL._SL500_.jpg, https://m.media-amazon.com/images/I/61dRG4HAEjL._SL500_.jpg, https://m.media-amazon.com/images/I/51eLw7nJEVL._SL500_.jpg, https://m.media-amazon.com/images/I/61WRg07xH5L._SL500_.jpg, https://m.media-amazon.com/images/I/51OIn2FgdtL._SL500_.jpg, https://m.media-amazon.com/images/I/51A6NcV3IML._SL500_.jpg, https://m.media-amazon.com/images/I/51oCDmdHz0L._SL500_.jpg, https://m.media-amazon.com/images/I/51WCemuJrML._SL500_.jpg, https://m.media-amazon.com/images/I/5173UuebIyL._SL500_.jpg, https://m.media-amazon.com/images/I/51usygspYnL._SL500_.jpg, https://m.media-amazon.com/images/I/51W4IdUKOuL._SL500_.jpg, https://m.media-amazon.com/images/I/51rVWypC0gL._SL500_.jpg, https://m.media-amazon.com/images/I/51Mcqpa2r4L._SL500_.jpg, https://m.media-amazon.com/images/I/51SF4PRZysL._SL500_.jpg, https://m.media-amazon.com/images/I/51Er1sF2nbS._SL500_.jpg, https://m.media-amazon.com/images/I/618fOq1qlyL._SL500_.jpg, https://m.media-amazon.com/images/I/51z0GfL9YcL._SL500_.jpg, https://m.media-amazon.com/images/I/51D3p6DT-8L._SL500_.jpg, https://m.media-amazon.com/images/I/61QA6qVLrTL._SL500_.jpg, https://m.media-amazon.com/images/I/51abBsVNpZL._SL500_.jpg, https://m.media-amazon.com/images/I/61iFFB2khaL._SL500_.jpg, https://m.media-amazon.com/images/I/51MHp+lugHL._SL500_.jpg, https://m.media-amazon.com/images/I/61xWDMNI5uL._SL500_.jpg, https://m.media-amazon.com/images/I/51pklynf1SL._SL500_.jpg, https://m.media-amazon.com/images/I/51wPtcp7slL._SL500_.jpg, https://m.media-amazon.com/images/I/51f2XSzLauL._SL500_.jpg, https://m.media-amazon.com/images/I/41QjcKcKqDL._SL500_.jpg, https://m.media-amazon.com/images/I/51dpLx8SEbL._SL500_.jpg, https://m.media-amazon.com/images/I/51+FBtAmyvL._SL500_.jpg, https://m.media-amazon.com/images/I/514x4dlFUQL._SL500_.jpg, https://m.media-amazon.com/images/I/51KAeWlCbuL._SL500_.jpg, https://m.media-amazon.com/images/I/510Lf9BNLtL._SL500_.jpg, https://m.media-amazon.com/images/I/514eu6PLx5L._SL500_.jpg, https://m.media-amazon.com/images/I/51qTt1xnwbL._SL500_.jpg, https://m.media-amazon.com/images/I/5184kxKmovL._SL500_.jpg, https://m.media-amazon.com/images/I/61CQKYWMSaL._SL500_.jpg, https://m.media-amazon.com/images/I/51Ki0-0TxML._SL500_.jpg, https://m.media-amazon.com/images/I/518DYy7eNBL._SL500_.jpg, https://m.media-amazon.com/images/I/51UgdpCVNHL._SL500_.jpg, https://m.media-amazon.com/images/I/41zWZLXsMIL._SL500_.jpg, https://m.media-amazon.com/images/I/51JPLCIDEyL._SL500_.jpg, https://m.media-amazon.com/images/I/51PeSdAY3xL._SL500_.jpg, https://m.media-amazon.com/images/I/51Kzxyi2E0L._SL500_.jpg, https://m.media-amazon.com/images/I/51wylO1QRML._SL500_.jpg, https://m.media-amazon.com/images/I/511tyszVDTL._SL500_.jpg, https://m.media-amazon.com/images/I/51rRG9FEJVL._SL500_.jpg, https://m.media-amazon.com/images/I/519IQMeJEtL._SL500_.jpg, https://m.media-amazon.com/images/I/51IWUGFcmyL._SL500_.jpg, https://m.media-amazon.com/images/I/51seUmxyZmL._SL500_.jpg, https://m.media-amazon.com/images/I/51WmWCyLBtL._SL500_.jpg, https://m.media-amazon.com/images/I/51xcxG5pAuL._SL500_.jpg, https://m.media-amazon.com/images/I/51rt2pFIW7L._SL500_.jpg, https://m.media-amazon.com/images/I/51iTiKGqWbL._SL500_.jpg, https://m.media-amazon.com/images/I/51VZ9z411hL._SL500_.jpg, https://m.media-amazon.com/images/I/61uzT8IuNFL._SL500_.jpg, https://m.media-amazon.com/images/I/61lNFPi859L._SL500_.jpg, https://m.media-amazon.com/images/I/51gO+Z28TAL._SL500_.jpg, https://m.media-amazon.com/images/I/51iq+YnTBNL._SL500_.jpg, https://m.media-amazon.com/images/I/61+NZmXQu2L._SL500_.jpg, https://m.media-amazon.com/images/I/51do-QEZncL._SL500_.jpg, https://m.media-amazon.com/images/I/51lI5ug1lVL._SL500_.jpg, https://m.media-amazon.com/images/I/51g72-DrLhL._SL500_.jpg, https://m.media-amazon.com/images/I/511zyYq9z8L._SL500_.jpg, https://m.media-amazon.com/images/I/61axWqH3A9L._SL500_.jpg, https://m.media-amazon.com/images/I/51sbelmhA+L._SL500_.jpg, https://m.media-amazon.com/images/I/51lYhaCxatL._SL500_.jpg, https://m.media-amazon.com/images/I/51b9KoGnEqL._SL500_.jpg, https://m.media-amazon.com/images/I/51rrbCYjg9L._SL500_.jpg, https://m.media-amazon.com/images/I/51+9stl2FDL._SL500_.jpg, https://m.media-amazon.com/images/I/41SB-29pJyL._SL500_.jpg, https://m.media-amazon.com/images/I/51kq7C8lqoL._SL500_.jpg, https://m.media-amazon.com/images/I/51xzESzwxKL._SL500_.jpg, https://m.media-amazon.com/images/I/51FOHbo9u5L._SL500_.jpg, https://m.media-amazon.com/images/I/51PwYMeREkL._SL500_.jpg, https://m.media-amazon.com/images/I/51z3caTbFkL._SL500_.jpg, https://m.media-amazon.com/images/I/51-VB-rZjmL._SL500_.jpg, https://m.media-amazon.com/images/I/51gQ53JRHhL._SL500_.jpg, https://m.media-amazon.com/images/I/5159vAuDdlL._SL500_.jpg, https://m.media-amazon.com/images/I/5154Q1zzBfL._SL500_.jpg, https://m.media-amazon.com/images/I/51TL6tYkfcL._SL500_.jpg, https://m.media-amazon.com/images/I/510xJGxi7FL._SL500_.jpg, https://m.media-amazon.com/images/I/51UQfykOdXL._SL500_.jpg, https://m.media-amazon.com/images/I/517Qd+9DFvL._SL500_.jpg, https://m.media-amazon.com/images/I/51-koEdKL2L._SL500_.jpg, https://m.media-amazon.com/images/I/51icwKEZxoL._SL500_.jpg, https://m.media-amazon.com/images/I/61fxJtNjbEL._SL500_.jpg, https://m.media-amazon.com/images/I/51l90ezwutL._SL500_.jpg, https://m.media-amazon.com/images/I/51xXycmDBoL._SL500_.jpg, https://m.media-amazon.com/images/I/51ENsWEmRWL._SL500_.jpg, https://m.media-amazon.com/images/I/517BQpIbdcL._SL500_.jpg, https://m.media-amazon.com/images/I/518OwEFH-fL._SL500_.jpg, https://m.media-amazon.com/images/I/51pcZ-w5V8L._SL500_.jpg, https://m.media-amazon.com/images/I/51PJcOVR-TL._SL500_.jpg, https://m.media-amazon.com/images/I/51RTDF4rDLL._SL500_.jpg, https://m.media-amazon.com/images/I/51hedaYDtjL._SL500_.jpg, https://m.media-amazon.com/images/I/51mCvoDtNXL._SL500_.jpg, https://m.media-amazon.com/images/I/51i7RZI4GUL._SL500_.jpg, https://m.media-amazon.com/images/I/51Qa-pHGDSL._SL500_.jpg, https://m.media-amazon.com/images/I/51U0whdwS6L._SL500_.jpg, https://m.media-amazon.com/images/I/61zMU9pTR2L._SL500_.jpg, https://m.media-amazon.com/images/I/51L0AqnXFAL._SL500_.jpg, https://m.media-amazon.com/images/I/61B8hcqb7fL._SL500_.jpg, https://m.media-amazon.com/images/I/51iaMwrO8VL._SL500_.jpg, https://m.media-amazon.com/images/I/51CnOU9YOWL._SL500_.jpg, https://m.media-amazon.com/images/I/418N3aa83oL._SL500_.jpg, https://m.media-amazon.com/images/I/61yY4vEKp+L._SL500_.jpg, https://m.media-amazon.com/images/I/5183dXfsF6L._SL500_.jpg, https://m.media-amazon.com/images/I/51-7gs4ceOL._SL500_.jpg, https://m.media-amazon.com/images/I/51Y6rqYHIyL._SL500_.jpg, https://m.media-amazon.com/images/I/61hlhm+-86L._SL500_.jpg, https://m.media-amazon.com/images/I/51hcx71-i0L._SL500_.jpg, https://m.media-amazon.com/images/I/61u6BCAhMXL._SL500_.jpg, https://m.media-amazon.com/images/I/61pFORZfD7L._SL500_.jpg, https://m.media-amazon.com/images/I/51il4MfN4FL._SL500_.jpg, https://m.media-amazon.com/images/I/51oNO9fYicL._SL500_.jpg, https://m.media-amazon.com/images/I/61f28nEHzVL._SL500_.jpg, https://m.media-amazon.com/images/I/51FD7Nc05jL._SL500_.jpg, https://m.media-amazon.com/images/I/514xhEF2oLL._SL500_.jpg, https://m.media-amazon.com/images/I/51Po5Yu2PjL._SL500_.jpg, https://m.media-amazon.com/images/I/61h22-s3DQL._SL500_.jpg, https://m.media-amazon.com/images/I/61N+6SyxOQL._SL500_.jpg, https://m.media-amazon.com/images/I/516Wnc2K31L._SL500_.jpg, https://m.media-amazon.com/images/I/51E0Y87ilrL._SL500_.jpg, https://m.media-amazon.com/images/I/51TEvS8noTL._SL500_.jpg, https://m.media-amazon.com/images/I/51rEM7dl2cL._SL500_.jpg, https://m.media-amazon.com/images/I/51K8Gev-BaL._SL500_.jpg, https://m.media-amazon.com/images/I/51NUet8PcDL._SL500_.jpg, https://m.media-amazon.com/images/I/51UNG0lbdAL._SL500_.jpg, https://m.media-amazon.com/images/I/51CtqOtUhjL._SL500_.jpg, https://m.media-amazon.com/images/I/51s0aZ+AAHL._SL500_.jpg, https://m.media-amazon.com/images/I/51fJbx8PEBL._SL500_.jpg, https://m.media-amazon.com/images/I/519qyvXO1FL._SL500_.jpg, https://m.media-amazon.com/images/I/51SF4Sjt6NL._SL500_.jpg, https://m.media-amazon.com/images/I/61BPyuAEvhL._SL500_.jpg, https://m.media-amazon.com/images/I/61K5EmhSaEL._SL500_.jpg, https://m.media-amazon.com/images/I/51Q3Az8ZGTL._SL500_.jpg, https://m.media-amazon.com/images/I/61Cm4ujvSJL._SL500_.jpg, https://m.media-amazon.com/images/I/51PENR43XxL._SL500_.jpg, https://m.media-amazon.com/images/I/51DJS-v0PVL._SL500_.jpg, https://m.media-amazon.com/images/I/51Koh4LUJyL._SL500_.jpg, https://m.media-amazon.com/images/I/519-f5ocPaL._SL500_.jpg, https://m.media-amazon.com/images/I/51yP0zY9iPL._SL500_.jpg, https://m.media-amazon.com/images/I/61f7PQ5+TML._SL500_.jpg, https://m.media-amazon.com/images/I/61jrc1vqIML._SL500_.jpg, https://m.media-amazon.com/images/I/51X0-nDw7uL._SL500_.jpg, https://m.media-amazon.com/images/I/618IPFAEJqL._SL500_.jpg, https://m.media-amazon.com/images/I/517cEWcHvPL._SL500_.jpg, https://m.media-amazon.com/images/I/51J7yd9oYlL._SL500_.jpg, https://m.media-amazon.com/images/I/613iznxJAxL._SL500_.jpg, https://m.media-amazon.com/images/I/61+2NGwGYdL._SL500_.jpg, https://m.media-amazon.com/images/I/51mozy9Z5NL._SL500_.jpg, https://m.media-amazon.com/images/I/51WG5NB5P3L._SL500_.jpg, https://m.media-amazon.com/images/I/41A1HQQakQL._SL500_.jpg, https://m.media-amazon.com/images/I/51ju0WbTTlL._SL500_.jpg, https://m.media-amazon.com/images/I/51k972p7p9L._SL500_.jpg, https://m.media-amazon.com/images/I/51aUxZbIRtL._SL500_.jpg, https://m.media-amazon.com/images/I/51gfXLJgqcL._SL500_.jpg, https://m.media-amazon.com/images/I/51ehFrNjuQL._SL500_.jpg, https://m.media-amazon.com/images/I/513-ZPUHEtL._SL500_.jpg, https://m.media-amazon.com/images/I/51pqcxRmvRL._SL500_.jpg, https://m.media-amazon.com/images/I/41ZUg2rX1zL._SL500_.jpg, https://m.media-amazon.com/images/I/51DPiJwk2HL._SL500_.jpg, https://m.media-amazon.com/images/I/51TWnQc6GbL._SL500_.jpg, https://m.media-amazon.com/images/I/61Csiq-T2hL._SL500_.jpg, https://m.media-amazon.com/images/I/513L29DhUpL._SL500_.jpg, https://m.media-amazon.com/images/I/61PVYlV-iKL._SL500_.jpg, https://m.media-amazon.com/images/I/61xyuGDQ0dL._SL500_.jpg, https://m.media-amazon.com/images/I/51bCNX27CKL._SL500_.jpg, https://m.media-amazon.com/images/I/61Sgc8HASfL._SL500_.jpg, https://m.media-amazon.com/images/I/5171QsWVhTL._SL500_.jpg, https://m.media-amazon.com/images/I/51LQ7-hCR-L._SL500_.jpg, https://m.media-amazon.com/images/I/61LcInhB-HL._SL500_.jpg, https://m.media-amazon.com/images/I/61VLs+PA+1L._SL500_.jpg, https://m.media-amazon.com/images/I/61bEVcjKNnL._SL500_.jpg, https://m.media-amazon.com/images/I/51tSMEZVNdL._SL500_.jpg, https://m.media-amazon.com/images/I/41xahZ5maKL._SL500_.jpg, https://m.media-amazon.com/images/I/51ZvQM5T0IL._SL500_.jpg, https://m.media-amazon.com/images/I/516xzO7xl8L._SL500_.jpg, https://m.media-amazon.com/images/I/51C+x8196WL._SL500_.jpg, https://m.media-amazon.com/images/I/51CqWr9OXRL._SL500_.jpg, https://m.media-amazon.com/images/I/51cIeAHWT3L._SL500_.jpg, https://m.media-amazon.com/images/I/51XMD8crUcL._SL500_.jpg, https://m.media-amazon.com/images/I/513zM0d-nBL._SL500_.jpg, https://m.media-amazon.com/images/I/51zx-I-GtbL._SL500_.jpg, https://m.media-amazon.com/images/I/51bjM5c2IRL._SL500_.jpg, https://m.media-amazon.com/images/I/61znHkQ+DxL._SL500_.jpg, https://m.media-amazon.com/images/I/61WuCmVZ1iL._SL500_.jpg, https://m.media-amazon.com/images/I/61sbAJWx--L._SL500_.jpg, https://m.media-amazon.com/images/I/61Ui-zDuklL._SL500_.jpg, https://m.media-amazon.com/images/I/51oV7kNQmdL._SL500_.jpg, https://m.media-amazon.com/images/I/61mNnFHHL-L._SL500_.jpg, https://m.media-amazon.com/images/I/51pXSz5balL._SL500_.jpg, https://m.media-amazon.com/images/I/51vvCFarxQL._SL500_.jpg, https://m.media-amazon.com/images/I/51D6we-sK5L._SL500_.jpg, https://m.media-amazon.com/images/I/51CS1YWxkmL._SL500_.jpg, https://m.media-amazon.com/images/I/51+3IQCCTUL._SL500_.jpg, https://m.media-amazon.com/images/I/61gAkAYFVtL._SL500_.jpg, https://m.media-amazon.com/images/I/51OYew-1bXL._SL500_.jpg, https://m.media-amazon.com/images/I/51pCVey-CyL._SL500_.jpg, https://m.media-amazon.com/images/I/51aRQiSD6KL._SL500_.jpg, https://m.media-amazon.com/images/I/617tr96-nOL._SL500_.jpg, https://m.media-amazon.com/images/I/51cr0klK7HL._SL500_.jpg, https://m.media-amazon.com/images/I/51he-AjnkmL._SL500_.jpg, https://m.media-amazon.com/images/I/51Sy5pQFDnL._SL500_.jpg, https://m.media-amazon.com/images/I/51TaZv0A9FL._SL500_.jpg, https://m.media-amazon.com/images/I/5192FZekU-L._SL500_.jpg, https://m.media-amazon.com/images/I/61+ed0AynUL._SL500_.jpg, https://m.media-amazon.com/images/I/61rZON4AiSL._SL500_.jpg, https://m.media-amazon.com/images/I/519y0zesn6L._SL500_.jpg, https://m.media-amazon.com/images/I/51kzMpLGP7L._SL500_.jpg, https://m.media-amazon.com/images/I/51f+jE7Q5PL._SL500_.jpg, https://m.media-amazon.com/images/I/61WplPFfGWL._SL500_.jpg, https://m.media-amazon.com/images/I/512LbEWDw4L._SL500_.jpg, https://m.media-amazon.com/images/I/51BsCnutnFL._SL500_.jpg, https://m.media-amazon.com/images/I/61i+0Vy0s+L._SL500_.jpg, https://m.media-amazon.com/images/I/51ZKPg5M+YL._SL500_.jpg, https://m.media-amazon.com/images/I/518caMiNG1L._SL500_.jpg, https://m.media-amazon.com/images/I/41yNdwUu5PL._SL500_.jpg, https://m.media-amazon.com/images/I/61QmENo49pL._SL500_.jpg, https://m.media-amazon.com/images/I/51BdS2Q1mWL._SL500_.jpg, https://m.media-amazon.com/images/I/61bPCKsX7RL._SL500_.jpg, https://m.media-amazon.com/images/I/61p0UyUk6gL._SL500_.jpg, https://m.media-amazon.com/images/I/61ijaqW7QyL._SL500_.jpg, https://m.media-amazon.com/images/I/51tYV3HR4lL._SL500_.jpg, https://m.media-amazon.com/images/I/619xaikKrsL._SL500_.jpg, https://m.media-amazon.com/images/I/615QiRvaHZL._SL500_.jpg, https://m.media-amazon.com/images/I/51nC0Lbq3CL._SL500_.jpg, https://m.media-amazon.com/images/I/51r86rrs6LL._SL500_.jpg, https://m.media-amazon.com/images/I/61U-X6D8TGL._SL500_.jpg, https://m.media-amazon.com/images/I/61aDa-9r2YL._SL500_.jpg, https://m.media-amazon.com/images/I/611fp1cAU0L._SL500_.jpg, https://m.media-amazon.com/images/I/51zqatQr7LL._SL500_.jpg, https://m.media-amazon.com/images/I/61uGsg9jNYL._SL500_.jpg, https://m.media-amazon.com/images/I/61osObHalmL._SL500_.jpg, https://m.media-amazon.com/images/I/61e0Cua9VtL._SL500_.jpg, https://m.media-amazon.com/images/I/61T8umRcbAL._SL500_.jpg, https://m.media-amazon.com/images/I/617jaR6l9kL._SL500_.jpg, https://m.media-amazon.com/images/I/61FkWBqbHBL._SL500_.jpg, https://m.media-amazon.com/images/I/61dJH-BkcmL._SL500_.jpg, https://m.media-amazon.com/images/I/51IfUNp2RNL._SL500_.jpg, https://m.media-amazon.com/images/I/51VWHjX6rTL._SL500_.jpg, https://m.media-amazon.com/images/I/616JOixmH-L._SL500_.jpg, https://m.media-amazon.com/images/I/51I8xisuTvL._SL500_.jpg, https://m.media-amazon.com/images/I/61iWKWhNS0L._SL500_.jpg, https://m.media-amazon.com/images/I/51NQnW6a7OL._SL500_.jpg, https://m.media-amazon.com/images/I/51Lr5rAN6cL._SL500_.jpg, https://m.media-amazon.com/images/I/51Nz4frJQmL._SL500_.jpg";
        this.covers.all = coverURLs.split(', ');
      }
      

    },  
  }
};

import SwiftUI
import WebKit

@MainActor
final class WebViewModel: ObservableObject {
    @Published var isLoading = false
    @Published var canGoBack = false
    @Published var canGoForward = false
    @Published var title: String = "KZFM"

    let url: URL
    private var webView: WKWebView?

    init(url: URL) {
        self.url = url
    }

    func configure(webView: WKWebView) {
        self.webView = webView
        webView.navigationDelegate = self
        webView.load(URLRequest(url: url))
    }

    func goBack() {
        webView?.goBack()
    }

    func goForward() {
        webView?.goForward()
    }

    func reload() {
        webView?.reload()
    }

    func openSafari() {
        guard let url = webView?.url ?? self.url as URL? else { return }
        if UIApplication.shared.canOpenURL(url) {
            UIApplication.shared.open(url)
        }
    }
}

extension WebViewModel: WKNavigationDelegate {
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        isLoading = true
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        isLoading = false
        canGoBack = webView.canGoBack
        canGoForward = webView.canGoForward
        title = webView.title ?? "KZFM"
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        isLoading = false
    }
}

struct WebView: UIViewRepresentable {
    @ObservedObject var model: WebViewModel

    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.bounces = false
        model.configure(webView: webView)
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        // No custom updates needed here.
    }
}

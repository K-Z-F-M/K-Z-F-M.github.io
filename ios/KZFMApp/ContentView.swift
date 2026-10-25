import SwiftUI

struct ContentView: View {
    @State private var webViewModel = WebViewModel(url: URL(string: "https://k-z-f-m.github.io")!)

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                WebView(model: webViewModel)
            }
            .toolbar {
                ToolbarItemGroup(placement: .topBarLeading) {
                    Button {
                        webViewModel.goBack()
                    } label: {
                        Image(systemName: "chevron.left")
                    }
                    .disabled(!webViewModel.canGoBack)

                    Button {
                        webViewModel.goForward()
                    } label: {
                        Image(systemName: "chevron.right")
                    }
                    .disabled(!webViewModel.canGoForward)
                }

                ToolbarItemGroup(placement: .topBarTrailing) {
                    Button {
                        webViewModel.reload()
                    } label: {
                        Image(systemName: "arrow.clockwise")
                    }

                    Button {
                        webViewModel.openSafari()
                    } label: {
                        Image(systemName: "safari")
                    }
                }
            }
            .navigationTitle("KZFM")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

#Preview {
    ContentView()
}

# Nguyễn Đức Phúc — Portfolio

## Đăng website bằng GitHub Pages (không cần Vercel)

1. Giải nén ZIP. Mở thư mục có `package.json`; đây là thư mục gốc của website.
2. Dùng GitHub Desktop đưa toàn bộ nội dung thư mục này lên repo, nhánh `main`.
   Phải có cả `.github/workflows/pages.yml`. Không tải nguyên file ZIP lên repo.
   Không đưa `node_modules`, `.next` hoặc `out` lên GitHub.
3. Nếu dùng GitHub Free, đặt repo ở chế độ **Public** để dùng GitHub Pages.
4. Trong repo, mở **Settings → Pages → Build and deployment → Source**,
   chọn **GitHub Actions**.
5. Mở **Actions → Publish portfolio to GitHub Pages → Run workflow**,
   chọn nhánh `main`, bấm **Run workflow**. Nếu lần chạy đầu thất bại vì chưa
   bật Pages, chạy lại sau bước 4.
6. Khi cả hai công việc `build` và `deploy` đều xanh, mở **Settings → Pages →
   Visit site** để lấy địa chỉ website. Các lần cập nhật nhánh `main` sau đó
   sẽ tự xuất bản lại.

Ví dụ, repo `nguyenducphucwork/digital-marketing-portfolio` sẽ có địa chỉ
`https://nguyenducphucwork.github.io/digital-marketing-portfolio/`
nếu chưa đặt tên miền riêng. Workflow tự lấy đường dẫn repo nên có thể đổi
tên repo hoặc dùng repo `<username>.github.io` mà không sửa mã đường dẫn ảnh.

Bạn không cần cài Node.js trên máy nếu chỉ tải source lên GitHub rồi dùng
workflow. GitHub sẽ tự cài thư viện và dựng website tĩnh.

Tài liệu: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

### Xuất bản tĩnh trên máy (tùy chọn)

Chạy `npm install`, rồi `npm run build:pages`; kết quả nằm trong `out/`.
Mặc định lệnh này xuất cho đường dẫn gốc. Workflow trên GitHub tự đặt
`NEXT_PUBLIC_BASE_PATH` khi website nằm trong đường dẫn con của repo.
Website portfolio hiện tại không cần máy chủ hay cơ sở dữ liệu.

## Chạy website trên máy tính

Dùng Node.js từ 22.13.0 trở lên. Giải nén ZIP, mở thư mục chứa
`package.json` bằng VS Code và mở Terminal tại thư mục đó:

```bash
npm install
npm run dev
```

Mở địa chỉ được Terminal hiển thị (thường là http://localhost:3000).
Các lệnh `dev`, `build` và `start` đã dùng Next.js, chạy được trên Windows.

## Cập nhật GitHub / Vercel

Đưa nội dung của thư mục này vào repository website hiện có. Đảm bảo
`package.json` nằm ở thư mục gốc của dự án. Không tải `node_modules`
hoặc `.next` lên GitHub.

Trên Vercel, chọn Framework Preset **Next.js**. File `vercel.json`
đã cấu hình lệnh build. Nếu repository đã kết nối với Vercel,
commit thay đổi để Vercel xây dựng phiên bản mới.

## Nội dung đã cập nhật

- Thêm đúng thứ tự 7 ảnh MOTI và 1 ảnh Outlier được cung cấp.
- Ảnh trong thư viện hiển thị toàn khung, bấm để phóng lớn;
  nút “Mở ảnh gốc” cho phép xem độ phân giải gốc ở tab riêng.
- Ba lựa chọn English, Tiếng Việt và 中文 (tiếng Trung giản thể),
  gồm nội dung, tiêu đề ảnh, mô tả ảnh và nhãn điều khiển.
- Ngôn ngữ được ghi nhớ trên trình duyệt khi trình duyệt cho phép.
- Chữ nội dung chính 17px, thẻ kỹ năng 16px, giãn dòng thoáng hơn.
- Giao diện kính mờ, xanh đêm và champagne, hiệu ứng hover nhẹ,
  xuất hiện khi cuộn và hỗ trợ tùy chọn giảm chuyển động.
- Animation xuất hiện lần lượt ở phần giới thiệu và thư viện ảnh; thẻ SEO/Growth
  chuyển động nhẹ trên thiết bị có chuột; nút chính có vệt sáng khi tương tác.
- Thanh tiến độ đọc ở mép trên; nền thanh điều hướng đậm hơn khi cuộn.
- Cấu hình xuất website tĩnh và tự động đăng bằng GitHub Pages.

## Các file để chỉnh sửa

- `app/page.tsx`: nội dung gốc và danh sách ảnh.
- `app/translations.ts`: bản dịch Việt/Trung.
- `app/globals.css`: bố cục, màu, kiểu chữ và hiệu ứng.
- `public/media/moti/`: 7 ảnh MOTI theo thứ tự được gửi.
- `public/media/outlier/`: ảnh hồ sơ Outlier.

Nội dung nằm bên trong ảnh và file CV PDF vẫn giữ nguyên bản gốc.

## Điểm nội dung cần đối chiếu

Chưa thay đổi các số liệu hoặc thời gian kinh nghiệm có trong bản gốc:

- Website ghi doanh thu MOTI năm 2024 là **30,4 tỷ đồng**; ảnh báo cáo
  vừa cung cấp ghi **20.489.250.000 đồng**.
- Website ghi thời gian MOTI **12/2023–05/2024**; giấy tiếp nhận thực tập
  trong ảnh ghi **07/01/2024–07/09/2024**.

Cần chủ sở hữu xác nhận số liệu và thời gian phù hợp trước khi sửa.

## Kiểm tra phiên bản

Đã dựng thành công website tĩnh cho cả đường dẫn gốc và đường dẫn con
`/digital-marketing-portfolio`, gồm kiểm tra TypeScript trong quá trình build.
Đã kiểm tra đường dẫn của 38 ảnh, CV, favicon, các file CSS/JavaScript,
188 mục dịch cho 3 ngôn ngữ và thứ tự 8 ảnh mới.
Chưa chạy kiểm tra trực quan trong trình duyệt ở phiên bản này.
Workflow đã được kiểm tra cấu trúc; chưa chạy trên tài khoản GitHub của bạn.

---

## Tài liệu starter gốc (tham khảo)

Phần dưới được giữ lại từ starter gốc. Các lệnh Cloudflare/vinext
không phải quy trình chạy bản GitHub/Vercel này; dùng hướng dẫn Next.js ở trên.

# vinext-starter

A clean full-stack starter running on
[vinext](https://github.com/cloudflare/vinext), with optional Cloudflare D1 and
Drizzle support.

## Prerequisites

- Node.js `>=22.13.0`
- Linux with `flock`, `curl`, and GNU `timeout`

## Sites Lifecycle

The Sites lifecycle CLI runs the locked dependency install before returning this checkout. Edit the source under `app/`, then checkpoint when a coherent milestone is ready to inspect or share. The remote Sites builder runs `npm run build` against the pushed commit. Do not repeat install or build as a normal pre-checkpoint step.

This starter does not use `wrangler.jsonc`.

`install:ci` is intentionally a single, non-retrying `npm ci`. It refuses a concurrent install for the same project, consumes a matching image-seeded npm cache with `--prefer-offline` while retaining registry fallback for a missing cache object, otherwise downloads and verifies the complete vinext tarball recorded in `package-lock.json`, limits npm to one socket, and terminates a stalled install. `build` applies a short timeout. These helpers target Linux and use GNU `timeout`; they are not native macOS scripts.

Scripts that need writable project-scoped home, npm, XDG, and temporary paths use `scripts/sites-env.sh`. The `dev` and `start` scripts honor the caller's runtime environment and keep Wrangler logs inside the checkout. The generated `.sites-runtime/` directory is disposable and ignored by Git.

## Included Shape

- edit site code under `app/`
- `app/chatgpt-auth.ts` provides optional dispatch-owned ChatGPT sign-in helpers
- `.openai/hosting.json` declares optional Sites D1 and R2 bindings
- `vite.config.ts` simulates declared bindings for local development
- `db/index.ts` reads the D1 binding from the Cloudflare Worker environment
- `db/schema.ts` starts intentionally empty
- `examples/d1/` contains an optional D1 example surface
- `drizzle.config.ts` supports local migration generation when needed

## Workspace Auth Headers

OpenAI workspace sites can read the current user's email from
`oai-authenticated-user-email`.

SIWC-authenticated workspace sites may also receive
`oai-authenticated-user-full-name` when the user's SIWC profile has a non-empty
`name` claim. The full-name value is percent-encoded UTF-8 and is accompanied by
`oai-authenticated-user-full-name-encoding: percent-encoded-utf-8`.

Treat the full name as optional and fall back to email when it is absent:

```tsx
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const email = requestHeaders.get("oai-authenticated-user-email");
  const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
  const fullName =
    encodedFullName &&
    requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
      "percent-encoded-utf-8"
      ? decodeURIComponent(encodedFullName)
      : null;

  const displayName = fullName ?? email;
  // ...
}
```

## Optional Dispatch-Owned ChatGPT Sign-In

Import the ready-to-use helpers from `app/chatgpt-auth.ts` when the site needs
optional or required ChatGPT sign-in:

- Use `getChatGPTUser()` for optional signed-in UI.
- Use `requireChatGPTUser(returnTo)` for server-rendered pages that should send
  anonymous visitors through Sign in with ChatGPT.
- In a Server Component, start sign-in with
  `<a href={chatGPTSignInPath(returnTo)} target="_top">`. The auth helper
  module is server-only; do not import it into a Client Component.
- Do not use `fetch`, XHR, a client-side router, or a framework link that can
  prefetch the sign-in route. SIWC must start as a top-level navigation.
- Never request the AuthAPI authorization endpoint directly. The dispatch-owned
  `/signin-with-chatgpt` route must start the SIWC flow.
- Use `chatGPTSignOutPath(returnTo)` for browser sign-out links or actions.
- Pass a same-origin relative `returnTo` path for the destination after sign-in
  or sign-out. The helper validates and safely encodes it.
- Mark protected pages with `export const dynamic = "force-dynamic"` because
  they depend on per-request identity headers.

Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, `/callback`, the
OAuth cookies, and identity header injection. Do not implement app routes for
those reserved paths. Routes that do not import and call the helper remain
anonymous-compatible.

SIWC establishes identity only; it does not prove workspace membership. Use the
Sites hosting platform's access policy controls for workspace-wide restrictions,
or enforce explicit server-side membership or allowlist checks.

Use SIWC for account pages, user-specific dashboards, saved records, and write
actions tied to the current ChatGPT user. Leave public content anonymous.

## Diagnostic Commands

- `npm run install:ci`: perform the one bounded lockfile install
- `npm run dev`: start the Vite/Vinext development server
- `npm run build`: build the deployable Sites artifact
- `npm run start`: start the built Vinext application
- `npm test`: build and verify the rendered development-preview metadata
- `npm run db:generate`: generate Drizzle migrations after schema changes

Use build commands for targeted diagnosis after a remote failure, not as part of the normal checkpoint path.

The timeout defaults can be overridden for a controlled canary with `SITES_INSTALL_TIMEOUT`, `SITES_INSTALL_KILL_AFTER`, `SITES_BUILD_TIMEOUT`, and `SITES_BUILD_KILL_AFTER`. A timeout fails the command; the helpers never retry an unchanged install or build.

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)

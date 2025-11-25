
// Mở / đóng chat
document.getElementById("chatBtn").onclick = function() {
    document.getElementById("chatBox").style.display = "flex";
};

document.getElementById("closeChat").onclick = function() {
    document.getElementById("chatBox").style.display = "none";
};

// Gửi tin nhắn
document.getElementById("sendBtn").onclick = function() {
    sendMessage();
};

document.getElementById("userMessage").addEventListener("keypress", function(e){
    if (e.key === "Enter") sendMessage();
});

// xử lí gửi tin nhắn
function sendMessage() {
    let message = document.getElementById("userMessage").value;
    if (message.trim() === "") return;

    let content = document.getElementById("chatContent");
    let newMsg = document.createElement("p");
    newMsg.classList.add("user");
    newMsg.textContent = message;
    content.appendChild(newMsg);

    document.getElementById("userMessage").value = "";
    content.scrollTop = content.scrollHeight;

    // bot rep
    setTimeout(() => {
        let reply = document.createElement("p");
        reply.classList.add("bot");
        reply.textContent = botReply(message);
        content.appendChild(reply);
        content.scrollTop = content.scrollHeight;
    }, 500);
}

// train cho chat
function botReply(message) {
    message = message.toLowerCase();

    // HỎI GIÁ
    if (message.includes("giá") || message.includes("tầm") || message.includes("bao nhiêu")) {
        return "Bạn muốn mua điện thoại tầm giá bao nhiêu? 🏷️ Ví dụ: dưới 3 triệu, 5-10 triệu, trên 15 triệu.";
    }

    // DƯỚI 3 TRIỆU
    if (message.includes("3 triệu") || message.includes("dưới 3")) {
        return "⚡ Dưới 3 triệu:\n• Vivo Y12s\n• Xiaomi Redmi 9A\n• Realme C21\n👉 Bạn muốn **pin trâu** hay **mượt khi dùng Facebook**?";
    }

    // 5-10 TRIỆU
    if (message.includes("5 triệu") || message.includes("10 triệu") || message.includes("5-10")) {
        return "🔥 5-10 triệu:\n• Samsung A34\n• Redmi Note 12 Pro\n• Realme 11\n👉 Bạn ưu tiên **camera** hay **chơi game**?";
    }

    // TRÊN 15 TRIỆU
    if (message.includes("15 triệu") || message.includes("trên 15")) {
        return "💎 Trên 15 triệu:\n• iPhone 15, 15 Pro\n• Samsung S24 Ultra\n• Xiaomi 14 Pro\n👉 Bạn thích **iPhone hay Android**?";
    }

    // CAMERA
    if (message.includes("camera") || message.includes("chụp")) {
        return "📸 Camera đẹp:\n• Vivo V30\n• iPhone 13/14\n• Google Pixel 7\n👉 Bạn thích **chụp đêm** hay **chân dung**?";
    }

    // GAME
    if (message.includes("game") || message.includes("pubg") || message.includes("liên quân") || message.includes("genshin")) {
        return "🎮 Máy chơi game tốt:\n• Poco X5 Pro\n• iQOO Neo 7\n• Realme GT Neo\n👉 Bạn cần **pin trâu** hay **màn hình 120Hz**?";
    }

    // PIN
    if (message.includes("pin") || message.includes("trâu")) {
        return "🔋 Pin trâu 5000mAh+: \n• Redmi Note 12\n• Samsung M14\n• Realme Narzo 50\n👉 Bạn muốn **sạc nhanh** không?";
    }

    // IPHONE
    if (message.includes("iphone")) {
        return "🍎 iPhone phù hợp:\n• Giá tốt: iPhone 11, 12\n• Camera/hiệu năng: iPhone 13, 14\n• Công nghệ mới nhất: iPhone 15\n👉 Bạn muốn 128GB hay 256GB?";
    }

    // SAMSUNG
    if (message.includes("samsung")) {
        return "📱 Samsung có:\n• A: giá rẻ–tầm trung\n• S: flagship mạnh nhất\n• M: pin trâu\n👉 Bạn muốn dòng A, S, hay M?";
    }

    // Hỏi bảo hành
    if (message.includes("bảo hành") || message.includes("bh") || message.includes("bao hanh")) {
        return "🛠️ Chính sách bảo hành 12 tháng chính hãng. Một đổi một trong 30 ngày nếu lỗi nhà sản xuất.\n👉 Bạn muốn xem **điện thoại nào đang được bảo hành 1 đổi 1**?";
    }

    // Đổi trả
    if (message.includes("đổi") || message.includes("đổi trả") || message.includes("đổi máy")) {
        return "♻️ Chính sách đổi trả:\n• Đổi máy trong 30 ngày nếu lỗi\n• Trả hàng theo tình trạng máy\n👉 Bạn gặp lỗi gì cần đổi?";
    }

    // Trả góp
    if (message.includes("trả góp") || message.includes("tra gop") || message.includes("trả trước") || message.includes("0%")) {
        return "💳 Trả góp 0% lãi suất qua thẻ tín dụng hoặc công ty tài chính.\n👉 Bạn muốn trả góp **iPhone, Samsung hay Xiaomi**?";
    }

    // So sánh
    if (message.includes("so sánh") || message.includes("so sanh")) {
        return "📊 Bạn muốn so sánh 2 mẫu nào? Ví dụ: *so sánh iPhone 13 và S23*.";
    }

    // Còn hàng
    if (message.includes("còn hàng") || message.includes("stock") || message.includes("có hàng")) {
        return "📦 Bạn đang hỏi sản phẩm nào? Mình kiểm tra tình trạng còn hàng giúp bạn.";
    }

    // Khuyến mãi
    if (message.includes("khuyến mãi") || message.includes("km") || message.includes("sale") || message.includes("giảm giá")) {
        return "🔥 Khuyến mãi hôm nay:\n• Giảm 2 triệu cho Samsung S23 FE\n• Giảm 1.5 triệu cho iPhone 14\n• Tặng sạc nhanh cho Redmi Note 12\n👉 Bạn muốn xem **danh sách khuyến mãi đầy đủ** không?";
    }

    // Phụ kiện
    if (message.includes("phụ kiện") || message.includes("ốp") || message.includes("tai nghe") || message.includes("cáp")) {
        return "🔌 Phụ kiện đi kèm:\n• Ốp lưng\n• Tai nghe\n• Sạc nhanh\n👉 Bạn muốn mua phụ kiện cho **dòng máy nào**?";
    }

    // Hỏi tư vấn máy theo nhu cầu
    if (message.includes("nên mua") || message.includes("tư vấn") || message.includes("hợp với")) {
        return "🤖 Bạn mô tả giúp nhu cầu của bạn: **chơi game, chụp hình, pin trâu, làm việc, hay dùng cơ bản**?";
    }

    // Hỏi cửa hàng
    if (message.includes("mua") || message.includes("ở đâu") || message.includes("cửa hàng")) {
        return "📍 Bạn đang ở khu vực nào? Mình sẽ gửi địa chỉ cửa hàng gần nhất.";
    }

    // Mặc định
    return "🤖 Mình chưa hiểu lắm… Bạn có thể hỏi về **giá, bảo hành, trả góp, đổi trả, so sánh máy hoặc nhu cầu sử dụng**.";
}

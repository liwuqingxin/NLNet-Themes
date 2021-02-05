window.$silence = {
    avatar: 'https://nlnet-iss.oss-cn-hangzhou.aliyuncs.com/img/20210205212146.avator.png',
    favicon: 'https://nlnet-iss.oss-cn-hangzhou.aliyuncs.com/img/20210205212146.avator.png',
    // github: 'https://github.com/liwuqingxin',
    defaultMode: 'auto',
    defaultTheme: 'c',

    navbars: [{
        title: '标签',
        url: 'https://www.cnblogs.com/liwuqingxin/tag/'
    }, {
        title: '常用链接',
        chilren: [{
            title: '遇见图床',
            target: '_blank',
            url: 'https://www.hualigs.cn',
        }, {
            title: '软件分享',
            target: '_blank',
            url: 'https://pan.baidu.com/disk/home?#/all?vmode=list&path=%2F!%20%E8%BD%AF%E4%BB%B6%E5%88%86%E4%BA%AB',
        }, {
            title: 'svg转base64',
            target: '_blank',
            url: 'https://www.css-js.com/tools/base64.html',
        }, {
            title: 'css选择器',
            target: '_blank',
            url: 'http://www.mamicode.com/info-detail-2629190.html',
        }, {
            title: 'shields',
            target: '_blank',
            url: 'https://shields.io/',
        }, {
            title: 'badgen',
            target: '_blank',
            url: 'https://badgen.net/',
        }, {
            title: '图片尺寸修改',
            target: '_blank',
            url: 'https://www.gaitubao.com/',
        }]
    }],

    showNavAdmin: true,
    hljsln: true,

    catalog: {
        enable: true,
        index: true,
        active: false,
        levels: ['h1', 'h2', 'h3', 'h4']
    },

    signature: {
        enable: true,
        author: null,
        license: ['署名-非商业性使用-相同方式共享 4.0 国际', 'https://creativecommons.org/licenses/by-nc-sa/4.0/'],
        remark: '',
    },

    sponsor: {
        enable: true,
        text: '',
        paypal: '',
        wechat: 'https://nlnet-iss.oss-cn-hangzhou.aliyuncs.com/img/20210205214540.wechart.jpg',
        alipay: 'https://nlnet-iss.oss-cn-hangzhou.aliyuncs.com/img/20210205214609.alipay.jpg'
    }
};

// 代码折叠
$(document).ready(function () {
    return;
    var pres = $("pre");
    for (var i = 0; i < pres.length; i++) {
        // --- 处于Pre内部
        // $(pres[i]).attr('id', 'pre' + i);
        // $(pres[i]).children('code').hide();
        // $(pres[i]).prepend('<button id="btn'+ i +'" onclick="view_code(\'pre'+ i +'\');" class="code-expander">查看代码</button>');

        // --- 处于Pre外部
        $(pres[i]).attr('id', 'pre' + i);
        // $(pres[i]).children('code').hide();
        var body = document.getElementById("cnblogs_post_body");
        var btn = document.createElement('button');
        btn.innerText = 'Hide Code';
        $(btn).attr('id', 'btn' + i);
        $(btn).attr('class', 'code-expander');
        $(btn).attr('onclick', 'view_code(\'' + i + '\');');
        pres[i].parentNode.insertBefore(btn, pres[i]); //在box之前添加元素
    }
});
function view_code(id) {
    // --- 处于Pre内部
    // var btn_text = document.getElementById(id).children[0].innerText;

    // --- 处于Pre外部
    var btn = document.getElementById('btn' + id);
    var btn_text = btn.innerText;

    var style;
    var style_btn
    var status;
    if (btn_text == 'View Code') {
        style = '""';
        style_btn = 'background: green';
        status = 'Hide Code';
    } else {
        style = 'display: none;';
        style_btn = 'background: var(--theme-color)';
        status = 'View Code';
    }

    // --- 处于Pre内部
    // document.getElementById('pre' + id).children[0].innerText = status;
    // document.getElementById('pre' + id).children[0].style = style_btn;
    // document.getElementById('pre' + id).children[1].style = style;

    // --- 处于Pre外部
    btn.innerText = status;
    btn.style = style_btn;
    document.getElementById('pre' + id).children[0].style = style;
}
// 代码折叠结束



// 隐藏摘要
$(document).ready(function () {
    return;
    var mainContent = document.getElementById("mainContent");
    var forFlow = mainContent.children[0];

    for (var i = 0; i < forFlow.children.length; i++) {
        var cur = forFlow.children[i];
        if (cur != null && cur.className == "day") {
            console.log("in" + cur.className + i);
            for (var j = 0; j < cur.children.length; j++) {
                var abs = cur.children[j];
                if (abs.className == "postCon") {
                    // $(abs).attr('hidden', 'hidden');
                    abs.innerHTML = "   ";
                }
            }
        }
        else {
            console.log("end" + i);
            break;
        }
    }
});
function getElementsByClassName(parent, tag, className) {
    //获取所有父节点下的tag元素
    var aEls = parent.getElementsByTagName(tag);
    var arr = [];

    //循环所有tag元素

    for (var i = 0; i < aEls.length; i++) {

        //将tag元素所包含的className集合（这里指一个元素可能包含多个class）拆分成数组,赋值给aClassName
        var aClassName = aEls[i].className.split(' ');

        //遍历每个tag元素所包含的每个className
        for (var j = 0; j < aClassName.length; j++) {

            //如果符合所选class，添加到arr数组
            if (aClassName[j] == className) {
                arr.push(aEls[i]);
                //如果className里面包含'box' 则跳出循环
                break; //防止一个元素出现多次相同的class被添加多次
            }
        };
    };
    return arr;
}

function __js_debug_msg(msg) {
    var panel = document.createElement('div');
    panel.id = "js_debug_msg";
    panel.setAttribute('style', 'position:fixed;width:300px;height:40px;padding:5px;background:#333;line-height:20px;color:#FFF;margin-top:0px;top:0px;right:0px;');
    panel.innerHTML = msg;
    document.body.appendChild(panel);
}
// 隐藏摘要结束


// Github
$(document).ready(function () {
    var navList = document.getElementById("navList");
    var a = document.createElement('a');
    // var img= document.createElement('img');
    // $(img).attr('src', '');
    // a.innerText = "Github";
    a.innerHTML = '<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
    $(a).attr('href', 'https://github.com/liwuqingxin');
    $(a).attr('id', 'navList_github');
    $(a).attr('class', 'github');
    $(a).attr('target', '_black');
    navList.appendChild(a);

    var footer = document.getElementById("footer");
    var span = document.createElement('span');
    span.innerHTML = '&amp; custom theme of <a href="https://github.com/liwuqingxin/Themes" target="_blank">NLNet\' cnblogs theme </a>'
    $(span).attr('class', 'esa-copyright');
    $(span).attr('id', 'nlnet_copyright');
    footer.appendChild(span);
});
function t(t){return/^1[3456789]{1}\d{9}$/.test(t)?(t=t.toString()).replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2"):""}function e(t){return/^[a-zA-Z0-9]{6,12}$/.test(t)}export{t as f,e as p};

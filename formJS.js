function showResult() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    const vh = document.querySelector('input[name="vH"]:checked');
    const npc = document.querySelector('input[name="npc"]:checked');
    const result =  document.getElementById("resultOfPoll");

    if (name === '' || email === '') {
        result.textContent = "Wait! We wanna know who you are, Vault Hunter! So fill in your name and email!";
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        result.textContent = "Hmm, that dosen't look like right, Vault Hunter. Enter a valid email address!";
        return;
    }

    if (!vh || !npc) {
        result.textContent = "You gotta pick your favorite VH and NPC. Don't leave us hanging, Vault Hunter!";
        return;
    }

    const reactions = {
        Zane:         "A man of gadgets and nonstop talking. Respect.",
        Fl4k:         "The hunt has chosen you. Pet the skag for me.",
        Amara:        "Six ghost arms of pure style. Excellent choice.",
        Moze:         "Nothing says love like a 15-ton mech named Iron Bear.",
        Ellie:        "Big wrench energy. She'd be proud.",
        Cl4ptrap:     "...A bold choice. May your stairs be few.",
        Lilith:       "The Firehawk herself. Iconic.",
        Moxxi:        "Don't forget to tip the jar, sugar.",
        Marcus:       "No refunds. Ever. But great taste!",
        Zer0:         "A haiku for you: / silent blade in the shadows / critical hit lands.",
        Tannis:       "Socially awkward, scientifically unstoppable.",
        Ava:          "Controversial pick! You're braver than most.",
        Rhys:         "The mustache deserved better, and you know it.",
        "Tiny Tina":  "Explosions?! Best tea party host on Pandora.",
        Brick:        "He is the deadliest man alive... and he loves puppies.",
        Mordecai:     "Pour one out for Bloodwing. A hunter's hunter.",
        Hammerlock:   "A gentleman, a scholar, a monster-hunting legend.",
        Typhon:       "The FIRST Vault Hunter! Deep-lore respect.",
        Vaughn:       "BANDIT LYFE! Abs of pure sunshine."
    };

    result.textContent = `Thanks ${name}! You voted for ${vh.value} + ${npc.value} huh? ` + `${reactions[vh.value]} And ${reactions[npc.value]}`;
}

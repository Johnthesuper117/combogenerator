// Move definitions with their categories and types
const moveData = {
    melee: {
        name: 'Melee',
        moves: [
            {id: 'heavy-kick', name: 'Heavy Kick', type: 'normal'},
            {id: 'light-kick', name: 'Light Kick', type: 'normal'},
            {id: 'light-punch', name: 'Light Punch', type: 'normal'},
            {id: 'heavy-punch', name: 'Heavy Punch', type: 'normal'},
            {id: 'grab', name: 'Grab', type: 'chain', chainTarget: 'throw', chainDelay: 1},
            {id: 'elbow', name: 'Elbow', type: 'normal'},
            {id: 'knee', name: 'Knee', type: 'normal'},
            {id: 'hip-check', name: 'Hip Check', type: 'normal'},
            {id: 'push', name: 'Push', type: 'normal'},
            {id: 'block', name: 'Block', type: 'normal'},
            {id: 'headbutt', name: 'Headbutt', type: 'normal'}
        ]
    },
    advanced: {
        name: 'Advanced',
        moves: [
            {id: 'uppercut', name: 'Uppercut', type: 'normal'},
            {id: 'jab', name: 'Jab', type: 'normal'},
            {id: 'bone-breaker', name: 'Bone Breaker', type: 'normal'},
            {id: 'charge', name: 'Charge', type: 'normal'},
            {id: 'backflip-kick', name: 'Backflip Kick', type: 'normal'},
            {id: 'frontflip-kick', name: 'Frontflip Kick', type: 'normal'},
            {id: 'roundhouse-kick', name: 'Roundhouse Kick', type: 'normal'},
            {id: 'karate-chop', name: 'Karate Chop', type: 'normal'},
            {id: 'spin-kick', name: 'Spin Kick', type: 'normal'},
            {id: 'drop-kick', name: 'Drop Kick', type: 'normal'},
            {id: 'leg-sweep', name: 'Leg Sweep', type: 'normal'},
            {id: 'punch-barrage', name: 'Punch Barrage', type: 'normal'},
            {id: 'fake-out-attack', name: 'Fake-Out Attack', type: 'normal'}
        ]
    },
    elemental: {
        name: 'Elemental',
        moves: [
            {id: 'laser-beam', name: 'Laser Beam', type: 'normal'},
            {id: 'electrocute', name: 'Electrocute', type: 'normal'},
            {id: 'fire-element-attack', name: 'Fire Element Attack', type: 'normal'},
            {id: 'meteor-summon', name: 'Meteor Summon', type: 'normal'},
            {id: 'lightning-bolt', name: 'Lightning Bolt', type: 'normal'},
            {id: 'ground-slam', name: 'Ground Slam', type: 'normal'},
            {id: 'boulder-throw', name: 'Boulder Throw', type: 'normal'},
            {id: 'water-blast', name: 'Water Blast', type: 'normal'},
            {id: 'ice-spike', name: 'Ice Spike', type: 'normal'},
            {id: 'acid-attack', name: 'Acid Attack', type: 'normal'},
            {id: 'lava-blast', name: 'Lava Blast', type: 'normal'},
            {id: 'next-move-fire-charged', name: 'Next Move Fire Charged', type: 'normal'},
            {id: 'next-move-electrically-charged', name: 'Next Move Electrically Charged', type: 'normal'},
            {id: 'time-stop', name: 'Time Stop', type: 'normal'}
        ]
    },
    silly: {
        name: 'Silly Combos',
        moves: [
            {id: 'eye-poke', name: 'Eye Poke', type: 'normal'},
            {id: 'groin-hit', name: 'Groin Hit', type: 'normal'},
            {id: 'slap', name: 'Slap', type: 'normal'},
            {id: 'bite', name: 'Bite', type: 'normal'},
            {id: 'fish-slap', name: 'Fish Slap', type: 'normal'}
        ]
    },
    movement: {
        name: 'Movement',
        moves: [
            {id: 'backflip', name: 'Backflip', type: 'normal'},
            {id: 'frontflip', name: 'Frontflip', type: 'normal'},
            {id: 'slide', name: 'Slide', type: 'normal'},
            {id: 'trip', name: 'Trip', type: 'normal'},
            {id: 'spin', name: 'Spin', type: 'normal'},
            {id: 'jump', name: 'Jump', type: 'normal'},
            {id: 'dodge', name: 'Dodge', type: 'normal'},
            {id: 'wallrun', name: 'Wallrun', type: 'normal'},
            {id: 'taunt', name: 'Taunt', type: 'normal'},
            {id: 'dash', name: 'Dash', type: 'normal'},
            {id: 'epic-fight-stance', name: 'Epic Fight Stance', type: 'normal'}
        ]
    },
    finishers: {
        name: 'Finishers',
        moves: [
            {id: 'neck-snap', name: 'Neck Snap', type: 'finisher'},
            {id: 'falcon-punch', name: 'Falcon Punch', type: 'finisher'},
            {id: 'knock-out', name: 'Knock Out', type: 'finisher'},
            {id: 'break-in-half', name: 'Break In Half', type: 'finisher'},
            {id: 'back-break', name: 'Back Break', type: 'finisher'},
            {id: 'slice', name: 'Slice', type: 'finisher'},
            {id: 'decapitate', name: 'Decapitate', type: 'finisher'},
            {id: 'explode', name: 'Explode', type: 'finisher'},
            {id: 'disintegrate', name: 'Disintegrate', type: 'finisher'},
            {id: 'mic-drop', name: 'Mic Drop', type: 'finisher'},
            {id: 'wild-bonfire-blast', name: 'Wild Bonfire Blast', type: 'finisher'}
        ]
    },
    custom: {
        name: 'Custom Moves',
        moves: []
    }
};

// Special move for chain completion
const throwMove = {id: 'throw', name: 'Throw', type: 'normal'};

// Move descriptors 
const moveDescriptors = {
    'wild-bonfire-blast': {
        title: 'Wild Bonfire Blast',
        description: 'Close or medium range. Charge fire in hand, close hand, fist becomes fire, fly forward and punch them with the fire. Then raise hand to the sky and shoot the fire ball. The fire ball comes down and explodes, killing them.'
    }
};

class ComboGenerator {
    constructor() {
        this.loadCustomMoves(); // Load custom moves first to ensure availability for parsing from url params
        this.initializeEventListeners();
        this.setupMoveDescriptors();
        this.loadInitialSettings();
        this.generateCombo();
    }

    initializeEventListeners() {
        const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleCategoryToggle(e.target);
                this.saveUserSettings();
                this.generateCombo();
            });
        });

        const generateBtn = document.getElementById('generate-combo');
        generateBtn.addEventListener('click', () => {
            this.generateCombo();
        });

        const moveCheckboxes = document.querySelectorAll('.move-item input[type="checkbox"]');
        moveCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateCategoryCheckboxes();
                this.saveUserSettings();
                this.generateCombo();
            });
        });

        const comboLengthInput = document.getElementById('combo-length');
        comboLengthInput.addEventListener('change', () => {
            this.saveUserSettings();
            this.generateCombo();
        });

        const copyUrlBtn = document.getElementById('copy-url');
        if (copyUrlBtn) {
            copyUrlBtn.addEventListener('click', () => {
                this.copyMoveUrl();
            });
        }

        const spinnerUpBtn = document.getElementById('combo-length-up');
        const spinnerDownBtn = document.getElementById('combo-length-down');

        if (spinnerUpBtn) {
            spinnerUpBtn.addEventListener('click', () => {
                this.incrementComboLength();
            });
        }

        if (spinnerDownBtn) {
            spinnerDownBtn.addEventListener('click', () => {
                this.decrementComboLength();
            });
        }

        const copyComboBtn = document.getElementById('copy-combo-text');
        if (copyComboBtn) {
            copyComboBtn.addEventListener('click', () => {
                this.copyComboText();
            });
        }

        // Custom move input listeners
        this.setupCustomMoveListeners();
    }

    handleCategoryToggle(categoryCheckbox) {
        const categoryId = categoryCheckbox.id.replace('-category', '');
        const categoryMovesContainer = document.getElementById(`${categoryId}-moves`);
        const moveCheckboxes = categoryMovesContainer.querySelectorAll('input[type="checkbox"]');

        moveCheckboxes.forEach(checkbox => {
            checkbox.checked = categoryCheckbox.checked;
        });
    }

    updateCategoryCheckboxes() {
        const categories = ['melee', 'advanced', 'elemental', 'silly', 'movement', 'custom', 'finishers'];

        categories.forEach(category => {
            const categoryCheckbox = document.getElementById(`${category}-category`);
            const categoryMovesContainer = document.getElementById(`${category}-moves`);
            const moveCheckboxes = categoryMovesContainer.querySelectorAll('input[type="checkbox"]');

            const checkedMoves = Array.from(moveCheckboxes).filter(cb => cb.checked);

            if (checkedMoves.length === 0) {
                categoryCheckbox.checked = false;
                categoryCheckbox.indeterminate = false;
            } else if (checkedMoves.length === moveCheckboxes.length) {
                categoryCheckbox.checked = true;
                categoryCheckbox.indeterminate = false;
            } else {
                categoryCheckbox.checked = false;
                categoryCheckbox.indeterminate = true;
            }
        });
    }

    getEnabledMoves() {
        const enabledMoves = {
            normal: [],
            chain: [],
            finisher: []
        };

        // Collect enabled moves
        Object.keys(moveData).forEach(categoryKey => {
            const category = moveData[categoryKey];
            category.moves.forEach(move => {
                const checkbox = document.getElementById(move.id);
                if (checkbox && checkbox.checked) {
                    enabledMoves[move.type].push(move);
                }
            });
        });

        return enabledMoves;
    }

    generateCombo() {
        const comboLength = parseInt(document.getElementById('combo-length').value);
        if (isNaN(comboLength) || comboLength < 1 || comboLength > 300) {
            this.displayCombo(['Okay, come on.']);
            return;
        }
        const enabledMoves = this.getEnabledMoves();
        const combo = [];

        if (enabledMoves.normal.length === 0 && enabledMoves.chain.length === 0) {
            this.displayCombo(['Please enable some moves.']);
            return;
        }

        let remainingSlots = comboLength;
        const pendingChains = []; // Grabs, etc
        let lastMoveWasChain = false;

        // Generate moves for the combo
        while (remainingSlots > 0) {
            // Check if we need to complete a pending chain (countdown reached 0)
            if (pendingChains.length > 0) {
                const chainToComplete = pendingChains.find(chain => chain.delay === 0);
                if (chainToComplete) {
                    // Force completion of the chain
                    combo.push(chainToComplete.targetMove.name);
                    remainingSlots--;
                    pendingChains.splice(pendingChains.indexOf(chainToComplete), 1);
                    lastMoveWasChain = false;
                    continue;
                }
            }

            // Finisher only if no pending chain
            if (remainingSlots === 1 && enabledMoves.finisher.length > 0 && pendingChains.length === 0) {
                const randomFinisher = enabledMoves.finisher[Math.floor(Math.random() * enabledMoves.finisher.length)];
                combo.push(randomFinisher.name);
                remainingSlots--;
                break;
            }

            // Build available moves list
            let availableMoves = [...enabledMoves.normal];

            // Add chain moves if conditions are met
            if (!lastMoveWasChain && remainingSlots > 2) {
                availableMoves = [...availableMoves, ...enabledMoves.chain];
            }

            // Random chance to complete chain early
            if (pendingChains.length > 0) {
                // 30% each generation
                if (Math.random() < 0.3) {
                    const chainTargets = pendingChains.map(chain => chain.targetMove);
                    availableMoves = [...availableMoves, ...chainTargets];
                }
            }

            if (availableMoves.length === 0) {
                break; // No moves available
            }

            const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            combo.push(randomMove.name);
            remainingSlots--;

            // Completed pending chain
            const completedChain = pendingChains.find(chain => chain.targetMove.name === randomMove.name);
            if (completedChain) {
                // Remove the completed chain from pending list
                pendingChains.splice(pendingChains.indexOf(completedChain), 1);
                lastMoveWasChain = false;
            } else if (randomMove.type === 'chain') {
                // Add new chain completion to pending list
                pendingChains.push({
                    delay: randomMove.chainDelay,
                    targetMove: throwMove,
                    justCreated: true  // Prevent decrementing on the same turn
                });
                lastMoveWasChain = true;
            } else {
                lastMoveWasChain = false;
            }

            pendingChains.forEach(chain => {
                if (chain.justCreated) {
                    // Skip decrementing on the first turn
                    chain.justCreated = false;
                } else if (chain.delay > 0) {
                    chain.delay--;
                }
            });
        }

        // This shouldn't happen
        if (pendingChains.length > 0 && remainingSlots === 0) {
            // Remove the last normal move and add the chain completion just in case
            combo.pop();
            combo.push(pendingChains[0].targetMove.name);
            console.log("Pending chains were not completed, but combo is full. Added chain completion.");
        }

        this.displayCombo(combo);
    }

    displayCombo(combo) {
        const comboOutput = document.getElementById('combo-output');

        if (combo.length === 0 || combo[0].includes('No moves selected')) {
            comboOutput.innerHTML = combo[0] || 'Unable to generate combo with current settings.';
            comboOutput.className = 'combo-output error';
            return;
        }

        const comboHtml = combo.map((move, index) => {
            let className = 'combo-move';

            // Highlight special moves
            if (move === 'Grab') {
                className += ' chain-move';
            } else if (move === 'Throw') {
                className += ' throw-move';
            } else if (this.isFinisher(move)) {
                className += ' finisher-move';
            }

            return `<span class="${className}">${move}</span>`;
        }).join(' <span class="combo-separator">→</span> ');

        comboOutput.innerHTML = comboHtml;
        comboOutput.className = 'combo-output success';

        // Store the combo text for copying (without HTML tags)
        this.lastComboText = combo.join(' → ');
        console.log('Generated combo text:', this.lastComboText);

        //this.setupComboMoveDescriptors();
    }

    isFinisher(moveName) {
        return moveData.finishers.moves.some(move => move.name === moveName);
    }

    saveUserSettings() {
        const settings = {
            comboLength: document.getElementById('combo-length').value,
            enabledMoves: {}
        };

        // Individual move states
        Object.keys(moveData).forEach(categoryKey => {
            const category = moveData[categoryKey];
            category.moves.forEach(move => {
                const checkbox = document.getElementById(move.id);
                if (checkbox) {
                    settings.enabledMoves[move.id] = checkbox.checked;
                }
            });
        });

        // Category states
        const categories = ['melee', 'advanced', 'elemental', 'silly', 'movement', 'finishers'];
        settings.categoryStates = {};
        categories.forEach(category => {
            const categoryCheckbox = document.getElementById(`${category}-category`);
            if (categoryCheckbox) {
                settings.categoryStates[category] = {
                    checked: categoryCheckbox.checked,
                    indeterminate: categoryCheckbox.indeterminate
                };
            }
        });

        localStorage.setItem('comboGeneratorSettings', JSON.stringify(settings));
    }

    loadUserSettings() {
        try {
            const savedSettings = localStorage.getItem('comboGeneratorSettings');
            if (!savedSettings) {
                return;
            }

            const settings = JSON.parse(savedSettings);

            if (settings.comboLength) {
                const comboLengthInput = document.getElementById('combo-length');
                if (comboLengthInput) {
                    comboLengthInput.value = settings.comboLength;
                }
            }

            if (settings.enabledMoves) {
                Object.keys(settings.enabledMoves).forEach(moveId => {
                    const checkbox = document.getElementById(moveId);
                    if (checkbox) {
                        checkbox.checked = settings.enabledMoves[moveId];
                    }
                });
            }

            if (settings.categoryStates) {
                Object.keys(settings.categoryStates).forEach(category => {
                    const categoryCheckbox = document.getElementById(`${category}-category`);
                    if (categoryCheckbox) {
                        const state = settings.categoryStates[category];
                        categoryCheckbox.checked = state.checked;
                        categoryCheckbox.indeterminate = state.indeterminate;
                    }
                });
            }
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    }

    loadInitialSettings() {
        // Check for URL parameters first
        const urlParams = new URLSearchParams(window.location.search);
        const hasUrlParams = urlParams.toString().length > 0;

        if (hasUrlParams) {
            // Turn off all moves in preparation for turning on specific ones
            this.disableAllMoves();

            // Load combo length from URL if present
            const comboLength = urlParams.get('length');
            if (comboLength) {
                const comboLengthInput = document.getElementById('combo-length');
                if (comboLengthInput) {
                    comboLengthInput.value = comboLength;
                }
            }

            this.loadFromUrlParams(urlParams);
        } else {
            // No URL params, just use their saved moves
            this.loadUserSettings();
        }
    }

    disableAllMoves() {
        Object.keys(moveData).forEach(categoryKey => {
            const category = moveData[categoryKey];
            category.moves.forEach(move => {
                const checkbox = document.getElementById(move.id);
                if (checkbox) {
                    checkbox.checked = false;
                }
            });
        });

        this.updateCategoryCheckboxes();
    }

    loadFromUrlParams(urlParams) {
        // Create a map of all move IDs
        const allMoves = {};
        Object.keys(moveData).forEach(categoryKey => {
            const category = moveData[categoryKey];
            category.moves.forEach(move => {
                allMoves[move.id] = move;
            });
        });

        for (const [paramName, paramValue] of urlParams.entries()) {
            // Skip the length parameter
            if (paramName === 'length') continue;

            // Check if this parameter matches a move ID
            if (allMoves[paramName] && paramValue === '1') {
                const checkbox = document.getElementById(paramName);
                if (checkbox) {
                    checkbox.checked = true;
                }
            }
        }

        // Update UI
        this.updateCategoryCheckboxes();
    }

    copyMoveUrl() {
        const baseUrl = window.location.origin + window.location.pathname;
        const params = new URLSearchParams();

        const comboLength = document.getElementById('combo-length').value;
        params.set('length', comboLength);

        // Add all enabled moves
        Object.keys(moveData).forEach(categoryKey => {
            const category = moveData[categoryKey];
            category.moves.forEach(move => {
                const checkbox = document.getElementById(move.id);
                if (checkbox && checkbox.checked) {
                    params.set(move.id, '1');
                }
            });
        });

        const fullUrl = baseUrl + '?' + params.toString();

        navigator.clipboard.writeText(fullUrl).then(() => {
            // Show feedback
            const btn = document.getElementById('copy-url');
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.background = 'linear-gradient(45deg, #37a866ff, #35915eff)';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#769cda';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy URL:', err);
            //alert('Failed. Please copy manually: ' + fullUrl);
        });
    }

    setupMoveDescriptors() {
        Object.keys(moveDescriptors).forEach(moveId => {
            const moveCheckbox = document.getElementById(moveId);
            if (moveCheckbox) {
                const moveItem = moveCheckbox.parentElement;
                moveItem.classList.add('move-with-descriptor');

                moveItem.addEventListener('mouseenter', (e) => {
                    this.showMovePopover(e.currentTarget, moveId);
                });

                moveItem.addEventListener('mouseleave', () => {
                    this.hideMovePopover();
                });

                console.log(`Added descriptor to move: ${moveId}`);
            } else {
                console.log(`Move element not found for: ${moveId}`);
            }
        });

        // Also add popover to the generated combo moves (so they can check move in the combo list and not have to scroll)
        this.setupComboMoveDescriptors();
    }

    setupComboMoveDescriptors() {
        const comboOutput = document.getElementById('combo-output');
        if (comboOutput) {
            // Remove existing event listeners to prevent duplicates
            comboOutput.removeEventListener('mouseenter', this.comboMouseEnter);
            comboOutput.removeEventListener('mouseleave', this.comboMouseLeave);

            // Store bound functions for removal
            this.comboMouseEnter = (e) => {
                if (e.target.classList.contains('combo-move')) {
                    const moveName = e.target.textContent;
                    const moveId = this.getMoveIdFromName(moveName);
                    if (moveId && moveDescriptors[moveId]) {
                        this.showMovePopover(e.target, moveId);
                    }
                }
            };

            this.comboMouseLeave = (e) => {
                if (e.target.classList.contains('combo-move')) {
                    this.hideMovePopover();
                }
            };

            comboOutput.addEventListener('mouseenter', this.comboMouseEnter, true);
            comboOutput.addEventListener('mouseleave', this.comboMouseLeave, true);
        }
    }

    getMoveIdFromName(moveName) {
        // Find move ID by name
        for (const categoryKey of Object.keys(moveData)) {
            const category = moveData[categoryKey];
            for (const move of category.moves) {
                if (move.name === moveName) {
                    return move.id;
                }
            }
        }
        return null;
    }

    showMovePopover(element, moveId) {
        console.log('Showing popover for:', moveId);
        const descriptor = moveDescriptors[moveId];
        if (!descriptor) {
            console.log('No descriptor found for:', moveId);
            return;
        }

        const popover = document.getElementById('move-popover');
        if (!popover) {
            console.log('Popover element not found');
            return;
        }

        const titleElement = popover.querySelector('.move-popover-title');
        const descriptionElement = popover.querySelector('.move-popover-description');

        if (titleElement && descriptionElement) {
            titleElement.textContent = descriptor.title;
            descriptionElement.textContent = descriptor.description;
        }

        const rect = element.getBoundingClientRect();

        //let left = rect.left + (rect.width / 2) - 100;
        // We needa be able to click it
        let left = rect.left + (rect.width);
        let top = rect.top - 80;

        // Ensure popover stays within viewport
        if (left < 10) left = 10;
        if (left + 200 > window.innerWidth - 10) {
            left = window.innerWidth - 210;
        }
        if (top < 10) {
            top = rect.bottom + 12;
        }

        popover.style.left = left + 'px';
        popover.style.top = top + 'px';
        popover.style.display = 'block';

        console.log('Popover positioned and shown');
    }

    hideMovePopover() {
        const popover = document.getElementById('move-popover');
        if (popover) {
            popover.style.display = 'none';
            console.log('Popover hidden');
        }
    }

    incrementComboLength() {
        const comboLengthInput = document.getElementById('combo-length');
        const currentValue = parseInt(comboLengthInput.value);
        const maxValue = parseInt(comboLengthInput.max);

        if (currentValue < maxValue) {
            comboLengthInput.value = currentValue + 1;
            this.saveUserSettings();
            this.generateCombo();
        }
    }

    decrementComboLength() {
        const comboLengthInput = document.getElementById('combo-length');
        const currentValue = parseInt(comboLengthInput.value);
        const minValue = parseInt(comboLengthInput.min);

        if (currentValue > minValue) {
            comboLengthInput.value = currentValue - 1;
            this.saveUserSettings();
            this.generateCombo();
        }
    }

    copyComboText() {
        if (!this.lastComboText) {
            console.log('No combo text to copy');
            return;
        }

        navigator.clipboard.writeText(this.lastComboText).then(() => {
            console.log('Combo text copied to clipboard:', this.lastComboText);

            // Visual feedback
            const btn = document.getElementById('copy-combo-text');
            const originalText = btn.textContent;
            btn.textContent = '✅';
            btn.style.background = '#37a866ff';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'white';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy combo text:', err);
            alert('Failed to copy combo text. Please copy manually: ' + this.lastComboText);
        });
    }

    loadCustomMoves() {
        const savedCustomMoves = localStorage.getItem('customMoves');
        if (savedCustomMoves) {
            try {
                const customMoves = JSON.parse(savedCustomMoves);
                moveData.custom.moves = customMoves;
                console.log('Loaded custom moves:', customMoves);
            } catch (error) {
                console.error('Error loading custom moves:', error);
                moveData.custom.moves = [];
            }
        }
        this.renderCustomMoves();
    }

    saveCustomMoves() {
        localStorage.setItem('customMoves', JSON.stringify(moveData.custom.moves));
        console.log('Saved custom moves:', moveData.custom.moves);
    }

    setupCustomMoveListeners() {
        const customMovesContainer = document.getElementById('custom-moves');
        if (customMovesContainer) {
            customMovesContainer.addEventListener('keydown', (e) => {
                if (e.target.classList.contains('custom-move-input') && e.key === 'Enter') {
                    this.addCustomMove(e.target);
                }
            });

            customMovesContainer.addEventListener('blur', (e) => {
                if (e.target.classList.contains('custom-move-input')) {
                    this.addCustomMove(e.target);
                }
            }, true);

            customMovesContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('custom-move-delete')) {
                    this.deleteCustomMove(e.target);
                }
            });
        }
    }

    addCustomMove(input) {
        const moveName = input.value.trim();
        if (!moveName || moveName.length < 2) {
            return;
        }

        // Make sure no dupes
        const existingMove = moveData.custom.moves.find(move =>
            move.name.toLowerCase() === moveName.toLowerCase()
        );
        if (existingMove) {
            alert('A custom move with this name already exists!');
            input.value = '';
            return;
        }

        const customMove = {
            id: `custom-${Date.now()}`,
            name: moveName,
            type: 'normal'
        };

        moveData.custom.moves.push(customMove);
        this.saveCustomMoves();
        this.renderCustomMoves();
        this.updateCategoryCheckboxes();
        this.generateCombo();

        console.log('Added custom move:', customMove);
    }

    deleteCustomMove(deleteButton) {
        const moveId = deleteButton.dataset.moveId;
        const moveIndex = moveData.custom.moves.findIndex(move => move.id === moveId);

        if (moveIndex !== -1) {
            const deletedMove = moveData.custom.moves.splice(moveIndex, 1)[0];
            this.saveCustomMoves();
            this.renderCustomMoves();
            this.updateCategoryCheckboxes();
            this.generateCombo();

            console.log('Deleted custom move:', deletedMove);
        }
    }

    renderCustomMoves() {
        const customMovesContainer = document.getElementById('custom-moves');
        if (!customMovesContainer) return;

        let html = '';

        // Render saved custom moves
        moveData.custom.moves.forEach(move => {
            html += `
                <div class="custom-move-item">
                    <div class="move-item">
                        <input type="checkbox" id="${move.id}" checked>
                        <label for="${move.id}">${move.name}</label>
                    </div>
                    <button class="custom-move-delete" data-move-id="${move.id}">×</button>
                </div>
            `;
        });

        // Add new input field
        html += `
            <div class="custom-move-input-container">
                <input type="text" class="custom-move-input" placeholder="Enter custom move name..." maxlength="50">
            </div>
        `;

        customMovesContainer.innerHTML = html;

        // New checkboxes
        const newCheckboxes = customMovesContainer.querySelectorAll('input[type="checkbox"]');
        newCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateCategoryCheckboxes();
                this.saveUserSettings();
                this.generateCombo();
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ComboGenerator();
});
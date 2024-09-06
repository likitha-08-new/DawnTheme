document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('mouseenter', (event) => {
      const productDetails = event.target.closest('.product-details');
      const productImage = productDetails.querySelector('.default-product-image');
  
      // Change the product image to the one linked to the hotspot
      const newImageUrl = '{{ block.settings.hover_image | image_url }}';  // URL for hover image
      productImage.src = newImageUrl;
    });
  
    hotspot.addEventListener('mouseleave', (event) => {
      const productDetails = event.target.closest('.product-details');
      const productImage = productDetails.querySelector('.default-product-image');
  
      // Restore the original product image
      const originalImageUrl = '{{ block.settings.image | image_url }}';  // Original image URL
      productImage.src = originalImageUrl;
    });
  });
  